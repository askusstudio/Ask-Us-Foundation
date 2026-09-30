import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaArrowRight, FaMapMarkerAlt } from 'react-icons/fa';

// Portrait photo with children & celebration
import celebrationPhoto from '../assets/image/sharang_event1.png';

export default function BirthdayCampaignCard() {
  return (
    <section className="w-full py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#FBF9F3] overflow-hidden">
      <div className="max-w-6xl mx-auto rounded-[2.5rem] bg-white shadow-2xl overflow-hidden border border-gray-100 grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[580px]">
        
        {/* ── LEFT: Full Bleed Portrait Image ── */}
        <div className="lg:col-span-6 relative w-full min-h-[420px] lg:min-h-full">
          <img 
            src={celebrationPhoto} 
            alt="Celebrate Birthday with AskUs Children" 
            className="absolute inset-0 w-full h-full object-cover object-top filter brightness-[0.98]"
          />
          {/* Subtle gradient overlay at bottom for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

          {/* Location Badge */}
          <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-amber-200">
            <span className="text-xs font-bold text-[#F99B2A] uppercase tracking-wider block">
              Lucknow Education Centres
            </span>
            <p className="text-[11px] text-gray-700 font-medium">120+ Students Across 3 Centres</p>
          </div>
        </div>

        {/* ── RIGHT: Content Details & CTA ── */}
        <div className="lg:col-span-6 p-8 sm:p-12 md:p-14 flex flex-col justify-between bg-white">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-[#F99B2A] text-xs font-bold uppercase tracking-wider mb-4">
              <FaHeart className="text-xs" /> New Campaign
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-gray-900 leading-tight font-serif mb-4">
              Celebrate Your Birthday With Our Children
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 font-sans">
              What if your birthday could become someone else's happiest day? Share your happiness with the children of AskUs Foundation in Lucknow and create memories that last forever.
            </p>

            {/* 3 Celebration Pillars */}
            <div className="grid grid-cols-3 gap-3 p-4 bg-[#FAF7F2] rounded-2xl border border-[#EFE7D8] mb-8 text-center">
              <div className="flex flex-col items-center">
                <span className="text-2xl mb-1">🎂</span>
                <strong className="text-xs text-gray-800 font-bold">Cake Party</strong>
                <span className="text-[10px] text-gray-500">Celebration</span>
              </div>
              <div className="flex flex-col items-center border-x border-[#E3D7C1]">
                <span className="text-2xl mb-1">🍱</span>
                <strong className="text-xs text-gray-800 font-bold">Birthday Meal</strong>
                <span className="text-[10px] text-gray-500">Nutritious food</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl mb-1">🚌</span>
                <strong className="text-xs text-gray-800 font-bold">Day Picnic</strong>
                <span className="text-[10px] text-gray-500">Fun & games</span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div>
            <Link
              to="/celebrate-your-birthday"
              className="w-full py-4 text-center text-white font-bold rounded-2xl transition-all duration-300 hover:scale-[1.01] active:scale-[0.98] text-base tracking-wide bg-[#F99B2A] hover:bg-[#E07B0A] shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 cursor-pointer"
            >
              <span>Plan Your Birthday Celebration</span>
              <FaArrowRight className="text-sm" />
            </Link>

            <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-400 font-medium">
              <FaMapMarkerAlt className="text-[#F99B2A]" />
              <span>Atari • Ashiyana • Telibagh Centres</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}