import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaHeart, FaShareAlt, FaHandHoldingHeart, FaUsers, FaGraduationCap, FaStar } from 'react-icons/fa';
import sharangLogo from '../assets/image/sharang.png';
import event1 from '../assets/image/sharang_event1.png';
import event2 from '../assets/image/sharang_event2.png';
import event3 from '../assets/image/sharang_event3.png';

const SharangLanding = () => {
  const navigate = useNavigate();

// Matched with Sir's directive
  const targetAmount = 350000;
  const currentRaised = 85000;
  const totalDonationsCount = 30;
  const progressPercent = Math.min(Math.round((currentRaised / targetAmount) * 100), 100);

  const handleDonateRedirect = (suggestedAmount) => {
    navigate(`/donate?campaignId=sharang-2026&campaignTitle=Sharang%202026&wing=EDUCATION_WING`);
  };

  const handleShare = async () => {
    const shareData = {
      title: 'Support Sharang 2026 | Ask Us Foundation',
      text: 'A celebration that goes beyond the stage — bringing people together to support education and empowerment. Support underprivileged children in showcasing their talent.',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Share canceled');
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard! Share it with your friends & family.');
    }
  };

  return (
    <div className="font-sans bg-[#FBF9F3] min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* HERO BANNER WITH AMBIENT COVER BACKGROUND */}
        <section className="relative w-full bg-[#0F0C08] text-white py-24 md:py-32 px-4 overflow-hidden flex items-center justify-center">
          {sharangLogo && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
              <img
                src={sharangLogo}
                alt="Sharang Brand Cover"
                className="w-full h-full object-cover filter blur-3xl scale-125 opacity-30 select-none"
              />
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-b from-[#0F0C08]/80 via-transparent to-[#0F0C08] pointer-events-none" />

          <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F99B2A]/20 border border-[#F99B2A]/40 text-[#F99B2A] text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md">
              <FaStar /> Special Annual Initiative • Sharang 2026
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-2xl">
              A Celebration That Goes <br className="hidden sm:inline" />
              <span className="text-[#F99B2A]">Beyond the Stage</span>
            </h1>

            <p className="text-base md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed font-normal drop-shadow-md">
              Bringing people together to support education and empowerment. Providing a platform to underprivileged children to showcase their talent and build a brighter future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md">
              <button
                onClick={() => handleDonateRedirect()}
                className="w-full sm:w-auto flex-1 bg-[#F99B2A] hover:bg-[#E07B0A] text-white font-bold text-base py-4 px-8 rounded-2xl shadow-xl transition-transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
              >
                <FaHeart /> Donate for Sharang 2026
              </button>

              <button
                onClick={handleShare}
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold text-base py-4 px-6 rounded-2xl backdrop-blur-md border border-white/25 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <FaShareAlt /> Share Campaign
              </button>
            </div>
          </div>
        </section>

        {/* PROGRESS & TARGET SECTION */}
        <section className="max-w-4xl mx-auto px-4 -mt-8 relative z-20">
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
              <div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Fundraising Goal</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
                  ₹{currentRaised.toLocaleString('en-IN')}{' '}
                  <span className="text-sm sm:text-base text-gray-400 font-normal">
                    raised of ₹{targetAmount.toLocaleString('en-IN')}
                  </span>
                </h3>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="px-3 py-1.5 bg-gray-100 text-gray-700 font-bold rounded-xl text-xs sm:text-sm">
                  {totalDonationsCount} Donations
                </span>
                <span className="px-3 py-1.5 bg-amber-50 text-[#F99B2A] font-bold rounded-xl text-xs sm:text-sm border border-[#F99B2A]/30">
                  {progressPercent}% Achieved
                </span>
              </div>
            </div>

            <div className="w-full h-3.5 bg-gray-100 rounded-full overflow-hidden mb-6">
              <div
                className="h-full bg-gradient-to-r from-[#F99B2A] to-[#E07B0A] rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
              {[500, 1000, 2500, 5000].map((amt) => (
                <button
                  key={amt}
                  onClick={() => handleDonateRedirect(amt)}
                  className="py-3 px-4 rounded-xl border border-gray-200 hover:border-[#F99B2A] hover:bg-amber-50/50 font-bold text-gray-800 hover:text-[#F99B2A] transition-all text-xs sm:text-sm flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <FaHandHoldingHeart className="text-[#F99B2A]" /> Support ₹{amt}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* IMPACT PILLARS */}
        <section className="max-w-6xl mx-auto py-16 px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Why Your Support Matters</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Every contribution helps us nurture raw talent, provide vital educational kits, and organize inclusive community platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-7 rounded-3xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-[#F99B2A] text-xl mb-5">
                <FaGraduationCap />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Empowering Talent</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Giving underprivileged kids mentorship, arts, cultural exposure, and the stage they rightfully deserve.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-[#F99B2A] text-xl mb-5">
                <FaUsers />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Community Bonding</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Bringing volunteers, families, and changemakers together under one collective mission of upliftment.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-[#F99B2A] text-xl mb-5">
                <FaStar />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Lifelong Confidence</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Building self-belief through recognition, stage exposure, awards, and continued educational support.
              </p>
            </div>
          </div>
        </section>

        {/* EVENT GALLERY SHOWCASE */}
        <section className="bg-white py-14 border-t border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Moments of Joy & Impact</h2>
              <p className="text-gray-500 text-sm">Glimpses from on-ground celebrations and community drives</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="overflow-hidden rounded-2xl shadow-sm">
                <img src={event1} alt="Sharang Drive 1" className="w-full h-64 object-cover" />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-sm">
                <img src={event2} alt="Sharang Drive 2" className="w-full h-64 object-cover" />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-sm">
                <img src={event3} alt="Sharang Drive 3" className="w-full h-64 object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM FINAL CALL TO ACTION */}
        <section className="py-16 px-4 text-center">
          <div className="max-w-3xl mx-auto bg-[#1A150D] text-white p-8 md:p-12 rounded-3xl shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Be the Reason Behind Their Smile</h2>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto text-xs sm:text-sm">
              Your contribution fuels the stage, certificates, kits, and hopes for dozens of talented young souls.
            </p>
            <button
              onClick={() => handleDonateRedirect()}
              className="bg-[#F99B2A] hover:bg-[#E07B0A] text-white font-bold text-base py-3.5 px-8 rounded-2xl shadow-lg transition-all cursor-pointer"
            >
              Support Sharang 2026 Now
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SharangLanding;