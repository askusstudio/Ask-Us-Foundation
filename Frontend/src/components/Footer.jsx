import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaHeadset,
  FaEnvelope,
  FaPaperPlane,
  FaCloudSun,
  FaChevronDown,
  FaChevronUp,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";

import logo from "../assets/image/logo.png";

export default function Footer() {
  const [timeStr, setTimeStr] = useState("");
  const [dateStr, setDateStr] = useState("");
  const [isSiteMapOpen, setIsSiteMapOpen] = useState(false);
  const [emailInput, setEmailInput] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
      setDateStr(
        now
          .toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })
          .replace(/\//g, "-")
      );
    };

    updateDateTime();
    const timer = setInterval(updateDateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      alert("Thank you for subscribing to AskUs Foundation updates!");
      setEmailInput("");
    }
  };

  return (
    <footer className="bg-[#1C2024] text-gray-300 font-sans border-t border-gray-800 text-xs sm:text-sm">
      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Column 1: Get in Touch & Official Address */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3 border-b border-gray-700/80 pb-3">
              <img src={logo} alt="AskUs Foundation" className="h-10 object-contain" />
              <h3 className="text-white text-base font-extrabold uppercase tracking-wider">
                Get In Touch
              </h3>
            </div>

            <div className="flex items-start gap-3 pt-1">
              <FaMapMarkerAlt className="text-[#F99B2A] text-lg shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block text-sm">ASK US FOUNDATION</strong>
                <p className="text-gray-400 text-xs leading-relaxed mt-0.5">
                  Kashi Tower Above Mishra Electronics,<br />
                  Main Market Telibagh, Lucknow,<br />
                  Uttar Pradesh 226002
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#F99B2A] shrink-0 text-sm" />
              <a
                href="tel:+919451481141"
                className="hover:text-white transition-colors text-xs"
              >
                +91 94514 81141
              </a>
            </div>

            <div className="flex items-start gap-3">
              <FaHeadset className="text-[#F99B2A] shrink-0 mt-0.5 text-base" />
              <div>
                <strong className="text-white text-xs block">
                  Support & Helpdesk Desk
                </strong>
                <p className="text-gray-300 text-xs">+91 94514 81141</p>
                <p className="text-[11px] text-gray-500">
                  (9:30 AM to 6:00 PM | Monday to Saturday)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#F99B2A] shrink-0 text-sm" />
              <a
                href="mailto:askusfoundation.lko@gmail.com"
                className="text-xs text-gray-300 hover:text-white transition-colors"
              >
                askusfoundation.lko[at]gmail[dot]com
              </a>
            </div>
          </div>

          {/* Column 2: Live Lucknow Weather, Dynamic Time & Social Badges */}
          <div className="lg:col-span-4 space-y-5">
            {/* Live Weather + Time Badge */}
            <div className="grid grid-cols-2 gap-3 bg-[#13171B] p-3.5 rounded-xl border border-gray-700/60 shadow-inner">
              <div className="flex items-center gap-2 border-r border-gray-700 pr-2">
                <FaCloudSun className="text-amber-400 text-2xl shrink-0" />
                <div>
                  <span className="text-[10px] text-gray-400 block uppercase tracking-wider">
                    Lucknow
                  </span>
                  <span className="text-lg font-black text-white">31°C</span>
                  <span className="text-[10px] text-gray-400 block">Clear sky</span>
                </div>
              </div>

              <div className="pl-1 flex flex-col justify-center">
                <span className="text-xs font-mono font-bold text-[#F99B2A]">
                  {timeStr || "09:00:00 PM"}
                </span>
                <span className="text-[11px] text-gray-400 mt-0.5">
                  {dateStr || "08-09-2026"}
                </span>
                <span className="text-[9px] text-emerald-400 uppercase tracking-widest font-semibold mt-0.5">
                  ● Live IST
                </span>
              </div>
            </div>

            {/* Audit & Visitor Stats (Formatted in Lacs as per Sir's request) */}
            <div className="text-xs space-y-1 bg-[#13171B]/60 p-3 rounded-lg border border-gray-800">
              <p className="text-gray-400 text-[11px]">
                <strong className="text-gray-200">Last updated on:</strong> September 8, 2026
              </p>
              <p className="text-gray-400 text-[11px]">
                <strong className="text-gray-200">Number of Visitors:</strong>{" "}
                <span className="text-amber-400 font-mono font-bold">
                  2.34 Lacs
                </span>
              </p>
            </div>

            {/* Official Social Links */}
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider mb-2.5">
                Connect with Us
              </p>
              <div className="flex gap-2">
                <a
                  href="https://www.facebook.com/p/AskUs-Foundation-Lko-61565764890229/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition-transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <FaFacebookF size={13} />
                </a>
                <a
                  href="https://x.com/ananyapandey_84"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-black text-white border border-gray-700 flex items-center justify-center hover:opacity-90 transition-transform hover:scale-110"
                  aria-label="Twitter / X"
                >
                  <FaXTwitter size={13} />
                </a>
                <a
                  href="https://www.linkedin.com/company/askus-foundation/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:opacity-90 transition-transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={13} />
                </a>
                <a
                  href="https://www.instagram.com/askusfoundation.lko/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 text-white flex items-center justify-center hover:opacity-90 transition-transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <FaInstagram size={13} />
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Newsletter Box & Mobile App Placeholders */}
          <div className="lg:col-span-4 space-y-5">
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <FaPaperPlane className="text-[#F99B2A]" /> Get updates in your inbox
              </p>
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter your Email Id"
                  required
                  className="bg-white text-gray-900 text-xs px-3.5 py-2.5 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-[#F99B2A]"
                />
                <button
                  type="submit"
                  className="bg-[#009688] hover:bg-[#00796B] text-white px-4 py-2.5 rounded-r-md transition-colors flex items-center justify-center cursor-pointer"
                  aria-label="Subscribe"
                >
                  <FaPaperPlane size={13} />
                </button>
              </form>
            </div>

            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                Download Mobile App
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-3 bg-black border border-gray-700 hover:border-gray-500 px-3 py-2 rounded-lg cursor-pointer transition-all w-48">
                  <FaApple className="text-2xl text-white" />
                  <div>
                    <span className="text-[9px] text-gray-400 block uppercase leading-none">
                      Download on the
                    </span>
                    <span className="text-xs font-bold text-white leading-none">
                      App Store
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-black border border-gray-700 hover:border-gray-500 px-3 py-2 rounded-lg cursor-pointer transition-all w-48">
                  <FaGooglePlay className="text-xl text-[#3DDC84]" />
                  <div>
                    <span className="text-[9px] text-gray-400 block uppercase leading-none">
                      Android app on
                    </span>
                    <span className="text-xs font-bold text-white leading-none">
                      Google Play
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Collapsible Open Site Map Accordion */}
        <div className="mt-10 pt-6 border-t border-gray-800 text-center">
          <button
            onClick={() => setIsSiteMapOpen(!isSiteMapOpen)}
            className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
          >
            <span>Open Site Map</span>
            {isSiteMapOpen ? <FaChevronUp size={11} /> : <FaChevronDown size={11} />}
          </button>

          {isSiteMapOpen && (
            <div className="mt-6 pt-6 border-t border-gray-800/60 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left max-w-5xl mx-auto text-xs text-gray-400">
              <div>
                <strong className="text-white block mb-2 font-bold uppercase text-[11px] tracking-wider">
                  Pages
                </strong>
                <ul className="space-y-1.5">
                  <li><Link to="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
                  <li><Link to="/about" className="hover:text-amber-400 transition-colors">About Us</Link></li>
                  <li><Link to="/initiatives" className="hover:text-amber-400 transition-colors">Initiatives</Link></li>
                  <li><Link to="/projects" className="hover:text-amber-400 transition-colors">Projects</Link></li>
                  <li><Link to="/impact" className="hover:text-amber-400 transition-colors">Impact</Link></li>
                  <li><Link to="/membership" className="hover:text-amber-400 transition-colors">Membership</Link></li>
                </ul>
              </div>

              <div>
                <strong className="text-white block mb-2 font-bold uppercase text-[11px] tracking-wider">
                  Our Initiatives
                </strong>
                <ul className="space-y-1.5">
                  <li><Link to="/revolutionaari" className="hover:text-amber-400 transition-colors">RevolutioNAARI</Link></li>
                  <li><Link to="/empowered" className="hover:text-amber-400 transition-colors">EmpowerEd</Link></li>
                  <li><Link to="/pawer-rangers" className="hover:text-amber-400 transition-colors">Pawer Rangers</Link></li>
                  <li><Link to="/green-squad" className="hover:text-amber-400 transition-colors">Green Squad</Link></li>
                  <li><Link to="/little-legends" className="hover:text-amber-400 transition-colors">Little Legends</Link></li>
                </ul>
              </div>

              <div>
                <strong className="text-white block mb-2 font-bold uppercase text-[11px] tracking-wider">
                  Wings & Campaigns
                </strong>
                <ul className="space-y-1.5">
                  <li><Link to="/sharang" className="hover:text-amber-400 transition-colors">Sharang 2026</Link></li>
                  <li><Link to="/wing/Education%20Wing" className="hover:text-amber-400 transition-colors">Education Wing</Link></li>
                  <li><Link to="/wing/Women%20Wing" className="hover:text-amber-400 transition-colors">Women Wing</Link></li>
                  <li><Link to="/donate" className="hover:text-amber-400 transition-colors">Donate Online</Link></li>
                </ul>
              </div>

              <div>
                <strong className="text-white block mb-2 font-bold uppercase text-[11px] tracking-wider">
                  Support & Help
                </strong>
                <ul className="space-y-1.5">
                  <li><a href="tel:+919451481141" className="hover:text-amber-400 transition-colors">Help Desk</a></li>
                  <li><Link to="/privacy-policy" className="hover:text-amber-400 transition-colors">Privacy Policy</Link></li>
                  <li><Link to="/terms" className="hover:text-amber-400 transition-colors">Terms & Conditions</Link></li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Middle Links Strip */}
      <div className="bg-[#14171A] border-t border-b border-gray-800 py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-x-4 gap-y-1.5 text-[11px] text-gray-400">
          <Link to="/copyright" className="hover:text-white transition-colors">Copyright Policy</Link>
          <span>|</span>
          <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          <span>|</span>
          <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <span>|</span>
          <Link to="/hyperlink" className="hover:text-white transition-colors">Hyperlinking Policy</Link>
          <span>|</span>
          <Link to="/help" className="hover:text-white transition-colors">Help</Link>
          <span>|</span>
          <Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
          <span>|</span>
          <Link to="/accessibility" className="hover:text-white transition-colors">Accessibility Statement</Link>
          <span>|</span>
          <Link to="/cyber-security" className="hover:text-white transition-colors">Cyber Security</Link>
          <span>|</span>
          <Link to="/screen-reader" className="hover:text-white transition-colors">Screen Reader Access</Link>
        </div>
      </div>

      {/* Bottom Institutional Disclaimer & Rights */}
      <div className="bg-[#0E1113] py-6 px-6 text-[11px] text-gray-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="space-y-1 leading-relaxed max-w-4xl">
            <p>
              Copyright © {new Date().getFullYear()} - All Rights Reserved - Official Website of AskUs Foundation.
            </p>
            <p className="text-[10px] text-gray-500">
              Content on this website is published and managed by AskUs Foundation. For any queries regarding this website, please contact the{" "}
              <span className="text-amber-400 font-medium">Web Information Manager</span>.
            </p>
          </div>

          <div className="shrink-0 text-center md:text-right">
            <span className="text-[10px] text-gray-500 uppercase tracking-widest block">Powered by</span>
            <strong className="text-white text-xs font-extrabold tracking-wider">AskUs Studio</strong>
          </div>
        </div>
      </div>
    </footer>
  );
}