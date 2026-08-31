package org.askusfoundation.backend.controller;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import com.razorpay.Utils;
import org.askusfoundation.backend.dto.DonationRequest;
import org.askusfoundation.backend.dto.MembershipDto;
import org.askusfoundation.backend.entity.Campaign;
import org.askusfoundation.backend.entity.Donation;
import org.askusfoundation.backend.repository.CampaignRepository;
import org.askusfoundation.backend.repository.DonationRepository;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

@RestController
@CrossOrigin(origins = {"http://localhost:5173", "https://foundation-frontend-inky.vercel.app", "https://askusfoundation.org", "https://www.askusfoundation.org"})
@RequestMapping("/razorpay")
public class RazorPayController {

    @Value("${razorpay.key.id}")
    private String keyId;

    @Value("${razorpay.key.secret}")
    private String keySecret;

    private final CampaignRepository campaignRepository;
    private final DonationRepository donationRepository;

    public RazorPayController(CampaignRepository campaignRepository, DonationRepository donationRepository) {
        this.campaignRepository = campaignRepository;
        this.donationRepository = donationRepository;
    }

    @PostMapping("/donation/create-order")
    public String createOrder(@RequestBody DonationRequest donation) {
        try {
            RazorpayClient client = new RazorpayClient(keyId, keySecret);

            JSONObject request = new JSONObject();
            request.put("amount", donation.getAmount() * 100); // INR to paise
            request.put("currency", "INR");
            request.put("receipt", "receipt_" + System.currentTimeMillis());

            // Notes me donation aur leaderboard privacy details
            JSONObject notes = new JSONObject();
            notes.put("payment_type", "DONATION");
            notes.put("first_name", donation.getFirstName() != null ? donation.getFirstName() : "");
            notes.put("last_name", donation.getLastName() != null ? donation.getLastName() : "");
            notes.put("donor_email", donation.getEmail());
            notes.put("donor_phone", donation.getPhone());
            notes.put("amount", String.valueOf(donation.getAmount()));
            notes.put("wing", donation.getWing() != null ? donation.getWing() : "GENERAL");
            notes.put("hide_from_leaderboard", String.valueOf(donation.isHideFromLeaderboard()));

            if (donation.getCampaignId() != null && !donation.getCampaignId().isBlank()) {
                notes.put("campaign_id", donation.getCampaignId());
            }
            request.put("notes", notes);

            Order order = client.orders.create(request);
            return order.toString();

        } catch (RazorpayException e) {
            return "{\"error\": \"Order creation failed\"}";
        }
    }

    @PostMapping("/membership/create-order")
    public String createMembershipOrder(@RequestBody MembershipDto membership) {
        try {
            RazorpayClient client = new RazorpayClient(keyId, keySecret);

            JSONObject request = new JSONObject();
            request.put("amount", membership.getAmount() * 100);
            request.put("currency", "INR");
            request.put("receipt", "receipt_" + System.currentTimeMillis());

            JSONObject notes = new JSONObject();
            notes.put("payment_type", "MEMBERSHIP");
            notes.put("membership_type", membership.getMembership_type());
            notes.put("member_name", membership.getFullName());
            notes.put("member_email", membership.getEmail());
            notes.put("member_phone", membership.getPhone());
            request.put("notes", notes);

            Order order = client.orders.create(request);
            return order.toString();

        } catch (RazorpayException e) {
            return "{\"error\": \"Order creation failed\"}";
        }
    }

    @PostMapping("/payment/verify")
    public String verifyPayment(@RequestBody Map<String, String> data) {
        try {
            String orderId = data.get("razorpay_order_id");
            String paymentId = data.get("razorpay_payment_id");
            String signature = data.get("razorpay_signature");

            JSONObject options = new JSONObject();
            options.put("razorpay_order_id", orderId);
            options.put("razorpay_payment_id", paymentId);
            options.put("razorpay_signature", signature);

            boolean isValid = Utils.verifyPaymentSignature(options, keySecret);

            if (!isValid) {
                return "{\"status\": \"failed\"}";
            }

            RazorpayClient client = new RazorpayClient(keyId, keySecret);
            Order order = client.orders.fetch(orderId);
            JSONObject notes = order.get("notes");

            if (notes != null && "DONATION".equals(notes.optString("payment_type"))) {
                // 1. Donation Record Database me save karein
                Donation donation = new Donation();
                donation.setFirstName(notes.optString("first_name", "Anonymous"));
                donation.setLastName(notes.optString("last_name", ""));
                donation.setEmail(notes.optString("donor_email", ""));
                donation.setPhone(notes.optString("donor_phone", ""));
                donation.setAmount(Double.parseDouble(notes.optString("amount", "0")));
                donation.setWing(notes.optString("wing", "GENERAL"));
                donation.setHideFromLeaderboard(Boolean.parseBoolean(notes.optString("hide_from_leaderboard", "false")));
                donation.setCampaignId(notes.optString("campaign_id", null));

                donationRepository.save(donation);

                // 2. Agar campaign associated hai toh raised amount update karein
                if (notes.has("campaign_id") && !notes.optString("campaign_id").isBlank()) {
                    String campaignIdStr = notes.getString("campaign_id");
                    try {
                        UUID campaignId = UUID.fromString(campaignIdStr);
                        Optional<Campaign> campaignOpt = campaignRepository.findById(campaignId);

                        if (campaignOpt.isPresent()) {
                            Campaign campaign = campaignOpt.get();
                            BigDecimal donatedAmount = new BigDecimal(notes.optString("amount", "0"));

                            BigDecimal currentRaised = campaign.getRaised() != null ? campaign.getRaised() : BigDecimal.ZERO;
                            Integer currentDonations = campaign.getDonations() != null ? campaign.getDonations() : 0;

                            campaign.setRaised(currentRaised.add(donatedAmount));
                            campaign.setDonations(currentDonations + 1);
                            campaignRepository.save(campaign);
                        }
                    } catch (IllegalArgumentException e) {
                        System.out.println("Invalid campaign_id format: " + campaignIdStr);
                    }
                }
            }

            return "{\"status\": \"success\"}";

        } catch (RazorpayException e) {
            return "{\"status\": \"error\"}";
        }
    }

    // Leaderboard Data API Endpoint
    @GetMapping("/leaderboard")
    public ResponseEntity<?> getLeaderboard(@RequestParam(defaultValue = "WOMEN_WING") String wing) {
        return ResponseEntity.ok(donationRepository.findByWingAndHideFromLeaderboardFalseOrderByAmountDesc(wing));
    }

    // Wing Stats API Endpoint (Donors count & Total raised)
    @GetMapping("/stats")
    public ResponseEntity<?> getWingStats(@RequestParam(defaultValue = "WOMEN_WING") String wing) {
        long totalDonors = donationRepository.countByWing(wing);
        Double totalAmount = donationRepository.sumAmountByWing(wing);
        return ResponseEntity.ok(Map.of("totalDonors", totalDonors, "totalAmount", totalAmount != null ? totalAmount : 0.0));
    }
}