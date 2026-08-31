package org.askusfoundation.backend.repository;

import org.askusfoundation.backend.entity.Donation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DonationRepository extends JpaRepository<Donation, Long> {

    // Leaderboard list: Sirf wahi log jinhone hideFromLeaderboard true nahi kiya
    List<Donation> findByWingAndHideFromLeaderboardFalseOrderByAmountDesc(String wing);

    // Wing-wise Total Donors Count
    long countByWing(String wing);

    // Wing-wise Total Amount
    @Query("SELECT COALESCE(SUM(d.amount), 0.0) FROM Donation d WHERE d.wing = :wing")
    Double sumAmountByWing(@Param("wing") String wing);
}