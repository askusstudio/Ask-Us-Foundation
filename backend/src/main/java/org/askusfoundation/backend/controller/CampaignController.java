package org.askusfoundation.backend.controller;

import org.askusfoundation.backend.entity.Campaign;
import org.askusfoundation.backend.repository.CampaignRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/campaigns")
@CrossOrigin(origins = {"http://localhost:5173", "https://foundation-frontend-inky.vercel.app", "https://askusfoundation.org", "https://www.askusfoundation.org"})
public class CampaignController {

    private final CampaignRepository campaignRepository;

    public CampaignController(CampaignRepository campaignRepository) {
        this.campaignRepository = campaignRepository;
    }

    // Agar wing parameter pass hoga toh specific wing ke active campaigns aayenge, nahi toh saare active campaigns
    @GetMapping
    public List<Campaign> getCampaigns(@RequestParam(required = false) String wing) {
        if (wing != null && !wing.isBlank()) {
            return campaignRepository.findByWingAndActiveTrue(wing);
        }
        return campaignRepository.findByActiveTrue();
    }

    @PostMapping
    public Campaign createCampaign(@RequestBody Campaign campaign) {
        return campaignRepository.save(campaign);
    }
}