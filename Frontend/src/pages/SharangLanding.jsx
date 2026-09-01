import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaHeart, FaShareAlt, FaHandHoldingHeart, FaUsers, FaGraduationCap, FaStar } from 'react-icons/fa';
import event1 from '../assets/image/sharang_event1.png';
import event2 from '../assets/image/sharang_event2.png';
import event3 from '../assets/image/sharang_event3.png';

const SharangLanding = () => {
  const navigate = useNavigate();

  const targetAmount = 350000;
  const currentRaised = 50;
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
        {/* HERO BANNER */}
        <section className="relative bg-[#1A150D] text-white py-16 md:py-24 px-4 overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F99B2A]/20 border border-[#F99B2A]/40 text-[#F99B2A] text-sm font-semibold mb-6">
              <FaStar /> Special Annual Initiative • Sharang 2026
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              A Celebration That Goes <br className="hidden sm:inline" />
              <span className="text-[#F99B2A]">Beyond the Stage</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Bringing people together to support education and empowerment. Providing a platform to underprivileged children to showcase their talent and build a brighter future.
            </p>

            {/* ACTION CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => handleDonateRedirect()}
                className="w-full sm:w-auto bg-[#F99B2A] hover:bg-[#E07B0A] text-white font-bold text-lg py-4 px-10 rounded-2xl shadow-xl transition-transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
              >
                <FaHeart /> Donate for Sharang 2026
              </button>

              <button
                onClick={handleShare}
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold text-lg py-4 px-8 rounded-2xl backdrop-blur-sm border border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <FaShareAlt /> Share Campaign
              </button>
            </div>
          </div>
        </section>

        {/* PROGRESS & TARGET SECTION */}
        <section className="max-w-4xl mx-auto px-4 -mt-10 relative z-20">
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
              <div>
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Fundraising Goal</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  ₹{currentRaised.toLocaleString('en-IN')}{' '}
                  <span className="text-base text-gray-400 font-normal">raised of ₹{targetAmount.toLocaleString('en-IN')}</span>
                </h3>
              </div>
              <span className="px-4 py-1.5 bg-amber-50 text-[#F99B2A] font-bold rounded-xl text-sm border border-[#F99B2A]/30">
                {progressPercent}% Achieved
              </span>
            </div>

            {/* Progress bar */}
            <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden mb-6">
              <div
                className="h-full bg-gradient-to-r from-[#F99B2A] to-[#E07B0A] rounded-full transition-all duration-500"
                style={{ width: `${Math.max(progressPercent, 2)}%` }}
              ></div>
            </div>

            {/* Quick Donation Buckets */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
              {[500, 1000, 2500, 5000].map((amt) => (
                <button
                  key={amt}
                  onClick={() => handleDonateRedirect(amt)}
                  className="py-3 px-4 rounded-xl border border-gray-200 hover:border-[#F99B2A] hover:bg-amber-50/50 font-bold text-gray-800 hover:text-[#F99B2A] transition-all text-sm flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <FaHandHoldingHeart className="text-[#F99B2A]" /> Support ₹{amt}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* IMPACT PILLARS */}
        <section className="max-w-6xl mx-auto py-20 px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Your Support Matters</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every contribution helps us nurture raw talent, provide vital educational kits, and organize inclusive community platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-md">
              <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center text-[#F99B2A] text-2xl mb-6">
                <FaGraduationCap />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Empowering Talent</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Giving underprivileged kids mentorship, arts, cultural exposure, and the stage they rightfully deserve.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-md">
              <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center text-[#F99B2A] text-2xl mb-6">
                <FaUsers />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Community Bonding</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Bringing volunteers, families, and changemakers together under one collective mission of upliftment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-md">
              <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center text-[#F99B2A] text-2xl mb-6">
                <FaStar />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lifelong Confidence</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Building self-belief through recognition, stage exposure, awards, and continued educational support.
              </p>
            </div>
          </div>
        </section>

        {/* EVENT GALLERY SHOWCASE */}
        <section className="bg-white py-16 border-t border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Moments of Joy & Impact</h2>
              <p className="text-gray-600">Glimpses from on-ground celebrations and community drives</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="overflow-hidden rounded-2xl shadow-md group">
                <img src={event1} alt="Sharang Drive 1" className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-md group">
                <img src={event2} alt="Sharang Drive 2" className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-md group">
                <img src={event3} alt="Sharang Drive 3" className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM FINAL CALL TO ACTION */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-3xl mx-auto bg-[#1A150D] text-white p-10 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Be the Reason Behind Their Smile</h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto text-sm sm:text-base">
              Your contribution fuels the stage, certificates, kits, and hopes for dozens of talented young souls.
            </p>
            <button
              onClick={() => handleDonateRedirect()}
              className="bg-[#F99B2A] hover:bg-[#E07B0A] text-white font-bold text-lg py-4 px-10 rounded-2xl shadow-xl transition-all cursor-pointer"
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