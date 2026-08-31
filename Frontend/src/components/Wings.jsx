import React from 'react';
import empowerEd from "../assets/image/empowerEd.jpg";
import empowerEd2 from "../assets/image/empowerEd2.jpg";
import empowerEd3 from "../assets/image/empowerEd3.jpg";
import revolutionaari from "../assets/image/revolutionaari.jpg";
import revolutionaari2 from "../assets/image/revolutionaari2.jpg";
import revolutionaari3 from "../assets/image/revolutionaari3.jpg";
import CampaignCard from "../components/CampaignCard";
import green from "../assets/image/green.jpg";
import sharang from "../assets/image/sharang.png";
import { useState, useEffect } from "react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";

export async function getCampaigns() {
  const response = await fetch(`${API_BASE_URL}/api/campaigns`);

  if (!response.ok) {
    throw new Error("Failed to fetch campaigns");
  }

  return response.json();
}

const Wings = () => {
  const campaignImages = {
    empowerEd: [empowerEd2, empowerEd3],
    revolutionaari: [revolutionaari, revolutionaari2, revolutionaari3],
    sharang: sharang,
  };

  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const data = await getCampaigns();
        setCampaigns(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load campaigns.");
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

      {/* Error */}
      {!loading && error && (
        <p className="text-red-500 text-lg">
          {error}
        </p>
      )}

      {/* Campaign Cards */}
      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full max-w-6xl">

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