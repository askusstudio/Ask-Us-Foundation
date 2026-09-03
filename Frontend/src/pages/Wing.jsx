import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { wingsData } from "../data/wingsData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { FaTrophy, FaMedal, FaHeart, FaUsers, FaRupeeSign } from "react-icons/fa";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";

const WingsDetail = () => {
  const { title } = useParams();

  const wing = wingsData.find(
    (item) =>
      item.title.toLowerCase() ===
      decodeURIComponent(title).toLowerCase()
  );

  const wingKey = wing ? wing.title.toUpperCase().replace(/\s+/g, '_') : "GENERAL";
  const isEducationWing = wingKey.includes("EDUCATION");

  const [leaderboard, setLeaderboard] = useState([]);
  const [stats, setStats] = useState({
    totalDonors: isEducationWing ? 30 : 0,
    totalAmount: isEducationWing ? 85000 : 0,
  });
  const [loadingLeaderboard, setLoadingLeaderboard] = useState(true);

  useEffect(() => {
    if (!wing) return;

    const fetchWingData = async () => {
      try {
        setLoadingLeaderboard(true);
        const [leaderboardRes, statsRes] = await Promise.all([
          axios.get(`${API_BASE_URL}/razorpay/leaderboard?wing=${wingKey}`),
          axios.get(`${API_BASE_URL}/razorpay/stats?wing=${wingKey}`),
        ]);

        setLeaderboard(leaderboardRes.data || []);
        
        const apiStats = statsRes.data || {};
        const amount = Number(apiStats.totalAmount) || 0;
        const donors = Number(apiStats.totalDonors) || 0;

        setStats({
          totalAmount: isEducationWing && amount === 0 ? 85000 : amount,
          totalDonors: isEducationWing && donors === 0 ? 30 : donors,
        });
      } catch (error) {
        console.error("Failed to load wing leaderboard/stats:", error);
      } finally {
        setLoadingLeaderboard(false);
      }
    };

    fetchWingData();
  }, [wingKey, wing, isEducationWing]);

  if (!wing) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <h1 className="text-3xl font-bold text-gray-800">
          Wing Not Found
        </h1>
      </div>
    );
  }

  const donateHref = isEducationWing
    ? `/donate?campaignId=sharang-2026&campaignTitle=Sharang%202026&wing=EDUCATION_WING`
    : `/donate?wing=${wingKey}&campaignTitle=${encodeURIComponent(wing.title)}`;

  return (
    <div className="font-sans min-h-screen bg-white overflow-x-hidden flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className={`${wing.heroBg}`}>
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
            <div className="max-w-4xl">
              <span className="inline-block px-4 py-2 rounded-full mt-6 bg-white/20 backdrop-blur text-white text-sm font-medium mb-6">
                ASKUS Foundation Wing
              </span>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[0.95] mb-8">
                {wing.title}
              </h1>

              <p className="text-white/90 text-lg md:text-2xl font-light leading-relaxed max-w-3xl mb-8">
                {wing.heroDescription}
              </p>

              <Link
                to={donateHref}
                className="inline-flex items-center gap-2 bg-[#F99B2A] hover:bg-[#E07B0A] text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <FaHeart /> Support This Wing
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Counter Ribbon */}
        <section className="bg-amber-50 border-y border-amber-100 py-8">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
            <div className="flex items-center justify-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-amber-100">
              <div className="p-4 bg-amber-100 rounded-2xl text-[#F99B2A] text-3xl">
                <FaUsers />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold tracking-wider text-gray-500 uppercase">Total Donors</p>
                <h3 className="text-3xl font-extrabold text-gray-900">{stats.totalDonors}</h3>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-amber-100">
              <div className="p-4 bg-green-100 rounded-2xl text-green-600 text-3xl">
                <FaRupeeSign />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold tracking-wider text-gray-500 uppercase">Funds Raised</p>
                <h3 className="text-3xl font-extrabold text-gray-900">₹{stats.totalAmount.toLocaleString('en-IN')}</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        {wing.story && (
          <section className="bg-white py-16 md:py-24">
            <div className="max-w-5xl mx-auto px-6">
              <div
                className="prose prose-lg lg:prose-xl max-w-none prose-headings:font-black prose-headings:text-gray-900 prose-headings:tracking-tight prose-p:text-gray-600 prose-p:leading-8 prose-p:text-lg prose-strong:text-gray-900 prose-strong:font-bold prose-blockquote:border-l-4 prose-blockquote:border-pink-500 prose-blockquote:bg-pink-50 prose-blockquote:px-6 prose-blockquote:py-2 prose-blockquote:rounded-r-xl"
                dangerouslySetInnerHTML={{
                  __html: wing.story,
                }}
              />
            </div>
          </section>
        )}

        {/* Leaderboard Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold tracking-wider uppercase mb-3">
                <FaTrophy className="text-amber-600" /> Wing Champions
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
                Top Supporters Leaderboard
              </h2>
              <p className="text-gray-600 mt-2">
                Recognizing the generous donors supporting our {wing.title} initiatives.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              {loadingLeaderboard ? (
                <div className="p-12 text-center text-gray-500">
                  <div className="w-10 h-10 border-4 border-amber-400 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
                  Loading supporters...
                </div>
              ) : leaderboard.length === 0 ? (
                <div className="p-12 text-center text-gray-500">
                  <p className="text-lg font-semibold text-gray-700">No public contributions yet</p>
                  <p className="text-sm text-gray-500 mt-1">Be the first champion to support this wing!</p>
                  <Link
                    to={donateHref}
                    className="inline-block mt-5 px-6 py-2.5 bg-[#F99B2A] text-white rounded-xl font-bold hover:bg-[#E07B0A] transition-colors"
                  >
                    Make a Donation
                  </Link>
                </div>
              ) : (
                <div className="divide-y divide-gray-100">
                  {leaderboard.map((donor, idx) => (
                    <div
                      key={donor.id || idx}
                      className="flex items-center justify-between p-5 sm:p-6 hover:bg-amber-50/50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full font-bold text-sm bg-gray-100 text-gray-700">
                          {idx === 0 ? <FaMedal className="text-yellow-500 text-xl" /> :
                           idx === 1 ? <FaMedal className="text-gray-400 text-xl" /> :
                           idx === 2 ? <FaMedal className="text-amber-700 text-xl" /> :
                           `#${idx + 1}`}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-base sm:text-lg">
                            {donor.firstName} {donor.lastName || ""}
                          </h4>
                          <p className="text-xs text-gray-500">
                            {donor.createdAt ? new Date(donor.createdAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) : 'Recent Supporter'}
                          </p>
                        </div>
                      </div>

                      <div className="text-right font-black text-lg text-emerald-600">
                        ₹{donor.amount?.toLocaleString('en-IN')}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Project Gallery */}
        {wing.project && (
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <div
                className={
                  wing.project.item.length === 1
                    ? "flex justify-center"
                    : "grid grid-cols-1 md:grid-cols-2 gap-8"
                }
              >
                {wing.project.item.map((item, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
                      wing.project.item.length === 1 ? "max-w-4xl w-full" : ""
                    }`}
                  >
                    <div className="overflow-hidden">
                      <img
                        src={item.img}
                        alt={item.loc}
                        loading="lazy"
                        className="w-full h-[280px] md:h-[450px] object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                    <div className="p-5 text-center">
                      <p className="text-lg md:text-xl font-semibold text-gray-800">
                        {item.loc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Story 2 */}
        {wing.story2 && (
          <section className="bg-white py-16 md:py-24">
            <div className="max-w-5xl mx-auto px-6">
              <div
                className="prose prose-lg lg:prose-xl max-w-none prose-headings:font-black prose-headings:text-gray-900 prose-headings:tracking-tight prose-p:text-gray-600 prose-p:leading-8 prose-p:text-lg prose-strong:text-gray-900 prose-strong:font-bold prose-blockquote:border-l-4 prose-blockquote:border-pink-500 prose-blockquote:bg-pink-50 prose-blockquote:px-6 prose-blockquote:py-2 prose-blockquote:rounded-r-xl"
                dangerouslySetInnerHTML={{
                  __html: wing.story2,
                }}
              />
            </div>
          </section>
        )}

        {/* Team Section */}
        {wing.team?.length > 0 && (
          <>
            <section className="bg-gradient-to-b from-white to-gray-50 py-16">
              <div className="max-w-4xl mx-auto text-center px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  {wing.teamTitle || "Our Team"}
                </h2>
                <div className="w-24 h-1 bg-pink-500 mx-auto mb-8 rounded-full" />
                {wing.teamDescription && (
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {wing.teamDescription}
                  </p>
                )}
              </div>
            </section>

            <section className="bg-gray-50 pb-20 px-6 md:px-12 lg:px-20">
              <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {wing.team.map((member, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    {member.image && (
                      <div className="overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-72 md:h-80 object-cover transition duration-700 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="p-6 text-center">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                        {member.name}
                      </h3>
                      <p className="mt-2 text-pink-600 font-semibold">
                        {member.role}
                      </p>
                      {member.location && (
                        <p className="text-gray-500 mt-2">
                          📍 {member.location}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default WingsDetail;