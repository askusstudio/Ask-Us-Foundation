import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTimes, FaHeart, FaStar } from 'react-icons/fa';
import popupImg from '../assets/image/sharang_event1.png';

const SharangPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if popup was dismissed in current session
    const hasSeenPopup = sessionStorage.getItem('hasSeenSharangPopup');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000); // 1 second delay after site load
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('hasSeenSharangPopup', 'true');
  };

  const handleExplore = () => {
    handleClose();
    navigate('/sharang');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl border border-amber-200 transform transition-all scale-100">
        
        {/* Close Button Top-Right */}
        <button
          onClick={handleClose}
          aria-label="Close popup"
          className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer text-sm"
        >
          <FaTimes />
        </button>

        {/* Campaign Visual Banner */}
        <div className="relative h-48 sm:h-52 w-full overflow-hidden">
          <img
            src={popupImg}
            alt="Sharang 2026 Drive"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A150D] via-black/30 to-transparent"></div>
          <div className="absolute bottom-3 left-4 right-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F99B2A] text-white text-xs font-bold uppercase tracking-wider mb-1">
              <FaStar className="text-[10px]" /> Annual Initiative
            </span>
            <h3 className="text-white text-xl font-bold leading-snug">Sharang 2026</h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 text-center">
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            A celebration that goes beyond the stage — bringing people together to support education and give underprivileged children a platform to shine.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleExplore}
              className="flex-1 bg-[#F99B2A] hover:bg-[#E07B0A] text-white font-bold py-3 px-5 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm cursor-pointer"
            >
              <FaHeart /> Join Initiative
            </button>
            <button
              onClick={handleClose}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-5 rounded-xl transition-colors text-sm cursor-pointer"
            >
              Maybe Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharangPopup;