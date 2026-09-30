// src/components/SharangLandingSection.jsx

import React from "react";
import { Link } from "react-router-dom";
import sharangCover from "../assets/image/sharang_cover.jpg.JPG";
import sharangWomen from "../assets/image/sharang_women.jpg.JPG";
import sharangStage from "../assets/image/sharang_stage.jpg.JPG";

export default function SharangLandingSection() {
  return (
    <section className="w-full relative py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-[#FAF7F2] border-t border-b border-[#EADFCB]">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 max-w-7xl mx-auto">

        {/* ── LEFT: Staggered Sharang Photo Collage ── */}
        <div className="flex gap-4 w-full lg:w-1/2 justify-center">
          
          {/* Left Column (Two Stacked Photos) */}
          <div className="flex flex-col items-end gap-4 w-1/2 sm:w-[280px] lg:w-auto">
            <div className="w-full sm:w-[300px] aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-4 border-white group">
              <img 
                src={sharangCover} 
                alt="Sharang Celebration" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <div className="w-4/5 sm:w-[240px] aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-4 border-white group">
              <img 
                src={sharangWomen} 
                alt="Women Champions" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
          </div>

          {/* Right Column (Single Tall Stage Photo) */}
          <div className="w-1/2 sm:w-[220px] lg:w-auto aspect-[4/5] rounded-3xl overflow-hidden mt-6 sm:mt-10 lg:mt-16 shadow-xl border-4 border-white group">
            <img 
              src={sharangStage} 
              alt="Stage Performance" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
          </div>

        </div>

        {/* ── RIGHT: Sharang Description & Button ── */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
          <span className="text-xs md:text-sm mb-3 text-[#F99B2A] font-bold tracking-widest uppercase">
            AskUs Foundation • 2nd Anniversary
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl mb-4 font-extrabold leading-tight text-gray-900 font-serif">
            SHARANG 2026
          </h2>
          <p className="text-lg italic text-amber-800 font-serif mb-4">
            “Moments We Will Cherish Forever.”
          </p>
          <p className="w-full md:w-5/6 text-gray-600 text-sm sm:text-base mb-8 leading-relaxed font-sans">
            Two years ago, it was only a dream. Today, it is a memory we created together. Sharang 2026 was a celebration of every child, woman, and partner who stood beside us. Explore our interactive digital memory card album.
          </p>
          <Link
            to="/sharang"
            className="inline-block px-8 py-4 text-center text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 text-sm tracking-wide bg-[#F99B2A] hover:bg-[#E07B0A] shadow-lg hover:shadow-xl cursor-pointer"
          >
            Open Memory Album →
          </Link>
        </div>

      </div>
    </section>
  );
}