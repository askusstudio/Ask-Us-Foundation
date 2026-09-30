import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaArrowDown, 
  FaBars, 
  FaTimes 
} from 'react-icons/fa';

// Actual Drive Photos mapping (.jpg.JPG extension)
import sharangCover from '../assets/image/sharang_cover.jpg.JPG';
import sharangFounder from '../assets/image/sharang_founder.jpg.JPG';
import sharangStage from '../assets/image/sharang_stage.jpg.JPG';
import sharangKids from '../assets/image/sharang_kids.jpg.JPG';
import sharangDance from '../assets/image/sharang_dance.jpg.JPG';
import sharangWomen from '../assets/image/sharang_women.jpg.JPG';
import sharangGroup from '../assets/image/sharang_group.jpg.JPG';

// New BTS Photos (.jpg.png extension)
import bts1 from '../assets/image/bts1.jpg.png';
import bts2 from '../assets/image/bts2.jpg.png';
import bts3 from '../assets/image/bts3.jpg.png';

export default function SharangMemory() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="bg-[#FAF7F2] text-[#1A150D] font-serif selection:bg-[#F99B2A] selection:text-white min-h-screen">
      
      {/* ── MINIMAL FLOATING BADGE HEADER ── */}
      <header className="fixed top-6 left-6 right-6 z-50 flex items-center justify-between pointer-events-none">
        <Link 
          to="/" 
          className="pointer-events-auto bg-black/75 hover:bg-black/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white font-sans text-xs tracking-widest uppercase transition-all shadow-lg"
        >
          AskUs Foundation <span className="text-[#F99B2A]">✦</span> Sharang 2026
        </Link>

        <button 
          onClick={() => setNavOpen(!navOpen)}
          className="pointer-events-auto bg-black/75 hover:bg-black/90 backdrop-blur-md p-3 rounded-full border border-white/20 text-white transition-all shadow-lg cursor-pointer"
          aria-label="Navigation Menu"
        >
          {navOpen ? <FaTimes size={14} /> : <FaBars size={14} />}
        </button>
      </header>

      {/* Floating Menu */}
      {navOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-lg z-40 flex flex-col items-center justify-center font-sans space-y-6 text-lg text-white">
          <Link to="/" onClick={() => setNavOpen(false)} className="hover:text-[#F99B2A] transition-colors">Foundation Home</Link>
          <a href="#the-first-page" onClick={() => setNavOpen(false)} className="hover:text-[#F99B2A] transition-colors">The Journey</a>
          <a href="#founder" onClick={() => setNavOpen(false)} className="hover:text-[#F99B2A] transition-colors">President's Note</a>
          <a href="#bts" onClick={() => setNavOpen(false)} className="hover:text-[#F99B2A] transition-colors">Behind The Scenes</a>
          <a href="#stage" onClick={() => setNavOpen(false)} className="hover:text-[#F99B2A] transition-colors">The Stage & Little Talents</a>
          <a href="#women" onClick={() => setNavOpen(false)} className="hover:text-[#F99B2A] transition-colors">Women Who Inspire</a>
          <a href="#final" onClick={() => setNavOpen(false)} className="hover:text-[#F99B2A] transition-colors">Final Memory</a>
        </div>
      )}

      {/* ── 01 — COVER (Faces fully clear, text at bottom) ── */}
      <section className="relative h-screen w-full flex flex-col justify-between items-center text-center px-4 py-6 bg-black text-white overflow-hidden">
        <img 
          src={sharangCover} 
          alt="Sharang 2026 Celebration" 
          className="absolute inset-0 w-full h-full object-cover object-[center_15%] opacity-85 scale-100"
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent via-40% to-black/95 pointer-events-none" />

        <div className="relative z-10 pt-16">
          <span className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-gray-200 bg-black/40 px-4 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
            AskUs Foundation • 2nd Anniversary
          </span>
        </div>

        <div className="relative z-10 max-w-4xl pb-4 flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight font-serif uppercase drop-shadow-2xl"
          >
            SHARANG 2026
          </motion.h1>

          <p className="italic text-base sm:text-xl md:text-2xl text-gray-200 mt-1 font-light drop-shadow">
            Moments We Will Cherish Forever.
          </p>

          <div className="font-sans text-xs tracking-widest text-[#F99B2A] mt-2 uppercase font-semibold">
            27.09.2026 • Lucknow
          </div>

          <div className="mt-4 flex flex-col items-center gap-1">
            <span className="font-sans text-[11px] tracking-widest uppercase text-gray-400">
              ↓ Open the memories
            </span>
            <FaArrowDown className="text-amber-400 animate-bounce text-xs mt-1" />
          </div>
        </div>
      </section>

      {/* ── 02 — THE FIRST PAGE ── */}
      <section id="the-first-page" className="py-28 px-6 max-w-4xl mx-auto text-center">
        <blockquote className="text-3xl md:text-5xl lg:text-6xl leading-snug font-normal italic text-[#2A2318]">
          “Two years ago, it was only a dream.<br />
          Today, it is a memory we created together.”
        </blockquote>

        <p className="font-sans text-base md:text-lg text-gray-600 max-w-2xl mx-auto mt-10 leading-relaxed font-light">
          Sharang 2026 wasn't just an event. It was a celebration of everything we have built, everyone who stood beside us, and every child, woman and dream that became part of the AskUs Foundation journey.
        </p>

        <div className="mt-16 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
          <img src={sharangStage} alt="Sharang 2026 Stage" className="w-full h-[450px] md:h-[600px] object-cover" />
        </div>
      </section>

      {/* ── 03 — TWO YEARS OF THE JOURNEY (PHOTO TIMELINE) ── */}
      <section className="py-24 bg-[#F2EDE4] border-y border-[#E5DEC9]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="font-sans text-xs uppercase tracking-widest text-[#8C7A65] block mb-2 font-bold">Photo Timeline</span>
          <h2 className="text-3xl md:text-5xl font-normal tracking-tight uppercase mb-16">
            TWO YEARS. COUNTLESS STORIES. ONE PURPOSE.
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-[#FAF7F2] p-8 rounded-2xl shadow-sm border border-[#E5DEC9]">
              <span className="block text-4xl md:text-6xl font-sans font-bold text-[#F99B2A] mb-2">3</span>
              <p className="font-sans text-xs tracking-wider uppercase text-gray-700 font-semibold">Centres of Education</p>
            </div>
            <div className="bg-[#FAF7F2] p-8 rounded-2xl shadow-sm border border-[#E5DEC9]">
              <span className="block text-4xl md:text-6xl font-sans font-bold text-[#F99B2A] mb-2">240+</span>
              <p className="font-sans text-xs tracking-wider uppercase text-gray-700 font-semibold">Students Reached</p>
            </div>
            <div className="bg-[#FAF7F2] p-8 rounded-2xl shadow-sm border border-[#E5DEC9]">
              <span className="block text-4xl md:text-6xl font-sans font-bold text-[#F99B2A] mb-2">110+</span>
              <p className="font-sans text-xs tracking-wider uppercase text-gray-700 font-semibold">Women Supported</p>
            </div>
            <div className="bg-[#FAF7F2] p-8 rounded-2xl shadow-sm border border-[#E5DEC9]">
              <span className="block text-4xl md:text-6xl font-sans font-bold text-[#F99B2A] mb-2">2,000+</span>
              <p className="font-sans text-xs tracking-wider uppercase text-gray-700 font-semibold">Plants Donated</p>
            </div>
          </div>

          <p className="italic text-gray-600 mt-12 text-lg max-w-2xl mx-auto">
            These aren't just numbers. They are people, stories, opportunities and dreams.
          </p>
        </div>
      </section>

      {/* ── 04 — THE PEOPLE ── */}
      <section className="py-28 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-normal italic text-gray-900">
            Every beautiful moment has people behind it.
          </h2>
          <p className="font-sans text-gray-600 text-sm md:text-base mt-3 uppercase tracking-wider">
            And Sharang had some of the most incredible people behind it.
          </p>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
          <img src={sharangGroup} alt="The People of Sharang" className="w-full h-[500px] md:h-[650px] object-cover" />
          
          <div className="hidden md:block absolute top-8 left-8 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-amber-200 max-w-xs -rotate-2">
            <span className="font-sans text-xs font-bold text-[#F99B2A] uppercase tracking-wider block">OUR TEAM</span>
            <p className="text-xs text-gray-700 italic mt-1">The ones who gave it their all.</p>
          </div>

          <div className="hidden md:block absolute bottom-12 left-12 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-amber-200 max-w-xs rotate-2">
            <span className="font-sans text-xs font-bold text-[#F99B2A] uppercase tracking-wider block">OUR GUESTS</span>
            <p className="text-xs text-gray-700 italic mt-1">The ones who gave us their time and blessings.</p>
          </div>

          <div className="hidden md:block absolute top-12 right-12 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-amber-200 max-w-xs rotate-1">
            <span className="font-sans text-xs font-bold text-[#F99B2A] uppercase tracking-wider block">OUR AUDIENCE</span>
            <p className="text-xs text-gray-700 italic mt-1">The ones who filled the room with their energy.</p>
          </div>
        </div>
      </section>

      {/* ── 05 — PRESIDENT'S MOMENT (Full Banner Visible, President Ananya Pandey) ── */}
      <section id="founder" className="py-28 px-6 bg-[#161310] text-[#FAF7F2]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          
          {/* Left: Full Uncut Banner Container */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/40 p-2 flex items-center justify-center">
              <img 
                src={sharangFounder} 
                alt="Sharang 2026 Banner" 
                className="w-full h-auto max-h-[500px] object-contain rounded-xl grayscale hover:grayscale-0 transition-all duration-700" 
              />
            </div>
          </div>

          {/* Right: President's Note */}
          <div className="w-full md:w-1/2 space-y-6">
            <span className="font-sans text-xs tracking-widest uppercase text-amber-400 block font-bold">
              A NOTE FROM THE PRESIDENT
            </span>

            <p className="text-lg md:text-xl italic leading-relaxed text-gray-300">
              “A proud president isn't someone who stands on the stage. A proud president is someone who looks around and realises that she has people who will stand beside her no matter the weather, the situation or the challenge.
            </p>

            <p className="text-lg md:text-xl italic leading-relaxed text-gray-300">
              People who don't ask, <span className="text-white font-normal">"Why should we?"</span><br />
              They simply say, <span className="text-[#F99B2A] font-medium">"We're with you. Let's do it."</span>
            </p>

            <p className="text-base text-gray-400 font-sans font-light">
              Sharang 2026 gave me that feeling. Pride. Gratitude. Satisfaction. And above all, the feeling that I am incredibly fortunate to have these people beside me.
            </p>

            <div className="pt-4 border-t border-white/10">
              <h4 className="text-xl font-normal tracking-wide">Ananya Pandey</h4>
              <p className="font-sans text-xs text-gray-500 uppercase tracking-widest mt-0.5">President, AskUs Foundation</p>
            </div>
          </div>

        </div>
      </section>

      {/* ── 06 — BEFORE THE CURTAIN ROSE (BTS 3-PHOTO COLLAGE, NO BOTTOM TEXT) ── */}
      <section id="bts" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-normal italic">
            Before the lights...<br />there were hundreds of little moments.
          </h2>
          <p className="font-sans text-xs uppercase tracking-widest text-gray-500 mt-3 font-semibold">
            The part the audience doesn't see.
          </p>
        </div>

        {/* 3-Photo Clean Scrapbook Collage without text captions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="overflow-hidden rounded-3xl shadow-xl border-4 border-white rotate-[-1.5deg] hover:rotate-0 transition-transform duration-300">
            <img 
              src={bts1} 
              alt="Behind the scenes moment 1" 
              className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500" 
            />
          </div>

          <div className="overflow-hidden rounded-3xl shadow-xl border-4 border-white rotate-[1.5deg] hover:rotate-0 transition-transform duration-300 md:-translate-y-3">
            <img 
              src={bts2} 
              alt="Behind the scenes moment 2" 
              className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500" 
            />
          </div>

          <div className="overflow-hidden rounded-3xl shadow-xl border-4 border-white rotate-[-1deg] hover:rotate-0 transition-transform duration-300">
            <img 
              src={bts3} 
              alt="Behind the scenes moment 3" 
              className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500" 
            />
          </div>
        </div>
      </section>

      {/* ── 07 & 08 — THE STAGE & THE YOUNG TALENTS ── */}
      <section id="stage" className="py-28 px-6 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto mb-16">
          <span className="font-sans text-xs tracking-widest text-[#F99B2A] uppercase block mb-3 font-bold">Transition</span>
          <h2 className="text-4xl md:text-7xl font-normal uppercase tracking-tight">
            AND THEN...<br />THE LIGHTS CAME ON.
          </h2>
        </div>

        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/20 mb-20">
          <img src={sharangStage} alt="Stage lights" className="w-full h-[550px] object-cover" />
        </div>

        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h3 className="text-3xl md:text-5xl italic text-amber-300">LITTLE TALENTS. BIG DREAMS.</h3>
          <p className="font-sans text-gray-300 text-sm md:text-base leading-relaxed font-light">
            For some, it was their first time on a stage like this. For others, it was a moment to show how far they had come. But every smile, every performance and every nervous step onto the stage meant one thing: <strong className="text-white">They were given a chance to shine.</strong>
          </p>
        </div>

        <div className="mt-16 max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
          <img src={sharangKids} alt="Young Talents" className="w-full h-[450px] object-cover" />
        </div>
      </section>

      {/* ── 09 — SPECIAL APPRECIATION ── */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-amber-200/80 flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <span className="font-sans text-xs font-bold text-[#F99B2A] uppercase tracking-widest block mb-2">A BIG ROUND OF APPLAUSE 👏</span>
            <h3 className="text-2xl md:text-3xl font-bold font-serif mb-2">Nrityamika Dance Academy</h3>
            <p className="font-sans text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Founder — Anamika Yadav</p>
            <p className="text-gray-600 text-sm leading-relaxed font-sans">
              Thank you for bringing incredible energy to Sharang 2026 and, more importantly, for continuously nurturing young talent and giving them a platform to shine.
            </p>
          </div>
          <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md">
            <img src={sharangDance} alt="Nrityamika Dance Academy" className="w-full h-72 object-cover" />
          </div>
        </div>
      </section>

      {/* ── 10 — THE WOMEN ── */}
      <section id="women" className="py-24 px-6 bg-[#FAF5EE] border-t border-[#E8DFC9]">
        <div className="max-w-5xl mx-auto text-center">
          <span className="font-sans text-xs font-bold text-[#F99B2A] uppercase tracking-widest block mb-2">Empowerment</span>
          <h2 className="text-3xl md:text-5xl font-normal uppercase tracking-tight mb-4">
            WOMEN WHO INSPIRE. WOMEN WHO LEAD. WOMEN WHO CREATE.
          </h2>
          <p className="font-sans text-gray-600 text-sm md:text-base max-w-2xl mx-auto mb-12">
            Sharang was also a celebration of the women who continue to learn, work, lead and create opportunities for themselves and others.
          </p>

          <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white mb-8">
            <img src={sharangWomen} alt="Women Who Inspire" className="w-full h-[500px] object-cover" />
          </div>

          <span className="inline-block px-6 py-2.5 bg-amber-100 text-amber-900 rounded-full font-sans text-sm font-bold">
            110+ women supported across our centres
          </span>
        </div>
      </section>

      {/* ── 15 & 16 — SHARANG 2026 IN ONE FRAME & FINAL MEMORY ── */}
      <section id="final" className="py-28 px-6 bg-[#0E0C0A] text-white text-center">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/20 relative">
            <img src={sharangGroup} alt="Sharang 2026 In One Frame" className="w-full h-[550px] object-cover opacity-85" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent flex flex-col justify-end p-8 md:p-14 text-center">
              <span className="font-sans text-xs uppercase tracking-widest text-[#F99B2A] font-bold">SHARANG 2026 • 27.09.2026</span>
              <h2 className="text-3xl md:text-5xl font-normal mt-2">
                One stage. Hundreds of people.<br />Thousands of emotions. One unforgettable day.
              </h2>
            </div>
          </div>

          <div className="mt-20 max-w-2xl mx-auto space-y-4">
            <p className="italic text-gray-400 text-lg">Some events end. Some become memories.</p>
            <h3 className="text-3xl md:text-5xl text-[#F99B2A] font-serif">SHARANG 2026</h3>
            <p className="font-sans text-xs tracking-widest uppercase text-gray-400">We will cherish this one forever. ❤️</p>
          </div>
        </div>
      </section>

      {/* ── 17 — LAST PAGE (THANK YOU) ── */}
      <footer className="py-24 px-6 bg-[#FAF7F2] text-center border-t border-[#E5DEC9]">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-normal uppercase tracking-tight">THANK YOU.</h2>
          
          <div className="font-sans text-xs md:text-sm text-gray-600 space-y-1 uppercase tracking-widest">
            <p>To our team • To our guests • To our performers</p>
            <p>To our children • To our women • To our volunteers</p>
            <p>To our partners • To our audience</p>
          </div>

          <p className="italic text-lg text-gray-800">
            Thank you for making Sharang 2026 ours.
          </p>

          <div className="pt-8 border-t border-gray-200">
            <strong className="font-sans text-sm tracking-wider uppercase block text-gray-900">AskUs Foundation</strong>
            <span className="font-sans text-xs text-gray-500 uppercase tracking-widest">Education • Empowerment • Opportunity</span>
          </div>
        </div>
      </footer>

    </div>
  );
}