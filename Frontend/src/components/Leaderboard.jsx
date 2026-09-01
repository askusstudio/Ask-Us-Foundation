import React, { useState, useEffect } from 'react';
import { FaTrophy, FaMedal, FaHeart, FaUserSecret } from 'react-icons/fa';

const Leaderboard = () => {
  // Sample data: Ise baad me direct backend API se dynamically map kar sakte hain
  const [donors, setDonors] = useState([
    { id: 1, name: 'Ananya Pandey', amount: 25000, wing: 'Education Wing', date: 'Aug 2026', anonymous: false },
    { id: 2, name: 'Vikramaditya S.', amount: 15000, wing: 'Environment Wing', date: 'Aug 2026', anonymous: false },
    { id: 3, name: 'Rohan Sharma', amount: 10000, wing: 'Health Wing', date: 'Aug 2026', anonymous: false },
    { id: 4, name: 'Anonymous Hero', amount: 7500, wing: 'Sharang 2026', date: 'Aug 2026', anonymous: true },
    { id: 5, name: 'Pooja Verma', amount: 5000, wing: 'Animal Care', date: 'Aug 2026', anonymous: false },
  ]);

  const getRankBadge = (index) => {
    switch (index) {
      case 0:
        return (
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-400 text-white font-bold shadow-md">
            <FaTrophy className="text-sm" />
          </span>
        );
      case 1:
        return (
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-300 text-slate-700 font-bold shadow-sm">
            <FaMedal className="text-sm" />
          </span>
        );
      case 2:
        return (
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-700 text-white font-bold shadow-sm">
            <FaMedal className="text-sm" />
          </span>
        );
      default:
        return (
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-600 font-semibold text-xs">
            #{index + 1}
          </span>
        );
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 max-w-4xl mx-auto my-12">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-amber-100 text-[#F99B2A] rounded-2xl flex items-center justify-center text-xl shadow-inner">
            <FaTrophy />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Top Supporters</h3>
            <p className="text-xs sm:text-sm text-gray-500">Honoring the champions fueling our community mission</p>
          </div>
        </div>
        <span className="px-3.5 py-1.5 rounded-full bg-amber-50 text-[#F99B2A] border border-amber-200 text-xs font-semibold">
          Live Updates
        </span>
      </div>

      {/* Leaderboard Donor List */}
      <div className="divide-y divide-gray-100 mt-4">
        {donors.map((donor, idx) => (
          <div
            key={donor.id}
            className={`flex items-center justify-between py-4 px-3 sm:px-4 rounded-2xl transition-colors ${
              idx === 0 ? 'bg-amber-50/40' : 'hover:bg-gray-50/70'
            }`}
          >
            <div className="flex items-center gap-3 sm:gap-4">
              {getRankBadge(idx)}

              <div>
                <h4 className="text-sm sm:text-base font-bold text-gray-800 flex items-center gap-1.5">
                  {donor.anonymous ? (
                    <>
                      <FaUserSecret className="text-gray-400" />
                      <span>{donor.name}</span>
                    </>
                  ) : (
                    donor.name
                  )}
                </h4>
                <div className="flex items-center gap-2 text-xs text-gray-400 mt-0.5">
                  <span>{donor.wing}</span>
                  <span>•</span>
                  <span>{donor.date}</span>
                </div>
              </div>
            </div>

            <div className="text-right">
              <span className="text-sm sm:text-base font-extrabold text-[#F99B2A]">
                ₹{donor.amount.toLocaleString('en-IN')}
              </span>
              <span className="block text-[11px] text-gray-400 font-medium">Contributed</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100 text-center">
        <p className="text-xs text-gray-500 flex items-center justify-center gap-1.5">
          <FaHeart className="text-rose-500" /> Every small contribution creates a lasting impact.
        </p>
      </div>
    </div>
  );
};

export default Leaderboard;