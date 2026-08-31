import React, { useState, useEffect } from 'react';
import empowerEd from "../assets/image/empowerEd.jpg";
import empowerEd2 from "../assets/image/empowerEd2.jpg";
import empowerEd3 from "../assets/image/empowerEd3.jpg";
import revolutionaari from "../assets/image/revolutionaari.jpg";
import revolutionaari2 from "../assets/image/revolutionaari2.jpg";
import revolutionaari3 from "../assets/image/revolutionaari3.jpg";
import CampaignCard from "../components/CampaignCard";
import green from "../assets/image/green.jpg";
import sharang from "../assets/image/sharang.png";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";

const defaultCampaigns = [
  {
    id: "empowered",
    title: "EmpowerEd Literacy Drive",
    description: "Supporting education, providing learning kits and school supplies for children.",
    wing: "EDUCATION_WING",
    imageUrl: "empowerEd",
    raised: 42000,
    goal: 100000,
    donations: 18
  },
  {
    id: "revolutionaari",
    title: "RevolutioNAARI Women Empowerment",
    description: "Vocational skill training, health awareness and self-reliance workshops for rural women.",
    wing: "WOMEN_WING",
    imageUrl: "revolutionaari",
    raised: 65000,
    goal: 150000,
    donations: 24
  },
  {
    id: "sharang",
    title: "Sharang Project",
    description: "Environmental sustainability, green plantation drives, and health initiatives across communities.",
    wing: "HEALTH_WING",
    imageUrl: "sharang",
    raised: 85000,
    goal: 200000,
    donations: 30
  }
];

export async function getCampaigns() {
  const response = await fetch(`${API_BASE_URL}/api/campaigns`);
  if (!response.ok) {
    throw new Error("Failed to fetch campaigns");
  }
  return response.json();
}

const Wings = () => {
  const campaignImages = {
    empowerEd: [empowerEd, empowerEd2, empowerEd3],
    revolutionaari: [revolutionaari, revolutionaari2, revolutionaari3],
    sharang: sharang || green,
  };

  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const data = await getCampaigns();
        if (data && Array.isArray(data) && data.length > 0) {
          setCampaigns(data);
        } else {
          setCampaigns(defaultCampaigns);
        }
      } catch (err) {
        console.warn("Backend API unavailable, displaying default campaigns.", err);
        setCampaigns(defaultCampaigns);
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  return (
    <section className="w-full flex flex-col items-center py-16 px-6 md:px-12 lg:px-24 bg-[#FBF9F3]">

      {/* Top Tagline */}
      <p className="text-gray-500 font-bold tracking-widest text-sm md:text-base uppercase mb-4">
        Our Wings
      </p>

      {/* Heading */}
      <h1 className="text-3xl md:text-5xl lg:text-6xl w-full md:w-4/5 lg:w-2/3 text-center font-bold mb-12 md:mb-16 leading-tight text-gray-900">
        Empowering communities through education, care, and sustainable initiatives.
      </h1>

      {/* Loading */}
      {loading && (
        <p className="text-gray-600 text-lg">
          Loading campaigns...
        </p>
      )}

      {/* Campaign Cards (3-column responsive grid) */}
      {!loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 w-full max-w-7xl">
          {campaigns.map((campaign) => {
            const cardImg = campaignImages[campaign.imageUrl] || campaign.imageUrl || empowerEd;

            return (
              <CampaignCard
                key={campaign.id}
                id={campaign.id}
                image={cardImg}
                title={campaign.title}
                description={campaign.description}
                raised={campaign.raised || 0}
                goal={campaign.goal || 100000}
                donations={campaign.donations || 0}
              />
            );
          })}
        </div>
      )}

    </section>
  );
};

export default Wings;