package org.askusfoundation.backend.repository;

import org.askusfoundation.backend.entity.Campaign;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface CampaignRepository extends JpaRepository<Campaign, UUID> {
    List<Campaign> findByActiveTrue();
    
    // Wing-wise active campaigns fetch karne ke liye
    List<Campaign> findByWingAndActiveTrue(String wing);
}