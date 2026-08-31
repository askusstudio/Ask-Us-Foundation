package org.askusfoundation.backend.dto;

public class DonationRequest {
    private int amount;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private String campaignId; // UUID string ke form mein aayega frontend se, nullable
    private String wing; // e.g. WOMEN_WING, HEALTH, etc.
    private boolean hideFromLeaderboard; // true agar user leaderboard par naam na dikhana chahe

    // Getters & Setters
    public String getCampaignId() {
        return campaignId;
    }

    public void setCampaignId(String campaignId) {
        this.campaignId = campaignId;
    }

    public int getAmount() { 
        return amount; 
    }
    
    public void setAmount(int amount) { 
        this.amount = amount; 
    }

    public String getFirstName() { 
        return firstName; 
    }
    
    public void setFirstName(String firstName) { 
        this.firstName = firstName; 
    }

    public String getLastName() { 
        return lastName; 
    }
    
    public void setLastName(String lastName) { 
        this.lastName = lastName; 
    }

    public String getEmail() { 
        return email; 
    }
    
    public void setEmail(String email) { 
        this.email = email; 
    }

    public String getPhone() { 
        return phone; 
    }
    
    public void setPhone(String phone) { 
        this.phone = phone; 
    }

    public String getWing() {
        return wing;
    }

    public void setWing(String wing) {
        this.wing = wing;
    }

    public boolean isHideFromLeaderboard() {
        return hideFromLeaderboard;
    }

    public void setHideFromLeaderboard(boolean hideFromLeaderboard) {
        this.hideFromLeaderboard = hideFromLeaderboard;
    }
}