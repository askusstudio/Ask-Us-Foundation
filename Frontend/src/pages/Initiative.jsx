import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaArrowRight } from "react-icons/fa";
import hero from "../assets/image/empowerEd.jpg"; // Working community photo
import revolutionaari from "../assets/image/revolutionaari.jpg";
import empowerEd from "../assets/image/empowerEd.jpg";
import pawerRanger from "../assets/image/pawerRanger.jpg";
import littleLegend from "../assets/image/littleLegend.png";
import greenSquad from "../assets/image/green.jpg";
import CTA from "../components/CTA";
import { Link } from "react-router-dom";

const initiatives = [
  {
    title: "Revolutioनारी",
    href: "/wing/Revolutioनारी",
    subtitle: "Empowering Rural Women Through Skills & Financial Literacy",
    description:
      "Revolutioनारी is dedicated to empowering rural women by providing skill development training, financial literacy, and opportunities for economic independence. We help women build confidence, achieve self-reliance, and create a brighter future for themselves and their communities.",
    image: revolutionaari,
    reverse: false,
  },
  {
    title: "EmpowerEd",
    href: "/wing/EmpowerEd",
    subtitle: "Shaping Young Minds Through Education & Personality Development",
    description:
      "EmpowerEd focuses on providing quality education, mentorship, and personality development programs for children and youth. Through holistic learning and life skills training, we inspire young individuals to unlock their potential and become future leaders.",
    image: empowerEd,
    reverse: true,
  },
  {
    title: "Pawer Rangers",
    href: "/wing/PAWerRangers",
    subtitle: "Protecting and Caring for Street Animals",
    description:
      "Pawer Rangers is committed to the welfare of street animals through rescue operations, feeding drives, and medical support. Our mission is to create a compassionate society where every animal is treated with care, dignity, and love.",
    image: pawerRanger,
    reverse: false,
  },
  {
    title: "Green Squad",
    href: "/wing/GreenSquad",
    subtitle: "Working Together for a Greener India",
    description:
      "Green Squad promotes environmental sustainability through tree plantation drives, awareness campaigns, and community-led green initiatives. We aim to inspire people across India to take action for a cleaner, healthier, and greener future.",
    image: greenSquad,
    reverse: true,
  },
  {
    title: "Little Legends",
    href: "/wing/EmpowerEd",
    subtitle: "Nurturing Young Dreams Through Education & Personal Growth",
    description:
      "Little Legends is dedicated to fostering education, creativity, and personality development among children. Through engaging learning experiences and mentorship, we empower young minds to dream big, grow confidently, and become responsible citizens.",
    image: littleLegend,
    reverse: false,
  },
];

export default function Initiatives() {
  return (
    <div className="font-['DM_Sans',_sans-serif]">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-[100svh] flex items-center bg-black pt-20 pb-16 overflow-hidden">
        <img
          src={hero}
          alt="Initiatives Background"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white w-full text-center md:text-left mt-10 md:mt-0">
          <p className="uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#F99B2A] mb-4 md:mb-6 text-sm md:text-base font-bold">
            Our Initiatives
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight max-w-5xl mx-auto md:mx-0">
            Creating Impact
            <br />
            One Initiative
            <br />
            At A Time
          </h1>

          <p className="mt-6 md:mt-8 text-base md:text-lg text-gray-300 max-w-2xl mx-auto md:mx-0 leading-relaxed font-light">
            Through education, women empowerment, animal welfare,
            and environmental action, AskUs Foundation is creating
            lasting change across communities.
          </p>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-16 md:py-24 bg-[#F5F3EE]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#F99B2A] mb-3 md:mb-4 text-xs md:text-sm font-bold">
            What We Do
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A150D] leading-tight">
            Transforming Lives Through{" "}
            <span className="italic text-[#F99B2A]">Purpose-Driven Work</span>
          </h2>

          <p className="mt-6 md:mt-8 text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Every initiative is designed to address a real challenge
            while empowering communities to become self-reliant,
            resilient, and future-ready.
          </p>
        </div>
      </section>

      {/* ── INITIATIVES LOOP ── */}
      {initiatives.map((item, index) => (
        <section
          key={item.title}
          className={`py-16 md:py-24 ${
            index % 2 === 0 ? "bg-white" : "bg-[#F5F3EE]"
          }`}
        >
          <div
            className={`max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center ${
              item.reverse ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            {/* IMAGE */}
            <div className="overflow-hidden rounded-2xl md:rounded-[32px] w-full shadow-lg">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover hover:scale-105 transition duration-700"
              />
            </div>

            {/* CONTENT */}
            <div className="text-center lg:text-left">
              <p className="uppercase tracking-[0.2em] md:tracking-[0.25em] text-[#F99B2A] text-xs md:text-sm mb-3 md:mb-4 font-bold">
                Initiative {index + 1}
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A150D]">
                {item.title}
              </h2>

              <h3 className="mt-3 md:mt-4 text-lg md:text-xl text-gray-700 font-medium">
                {item.subtitle}
              </h3>

              <p className="mt-5 md:mt-8 text-base md:text-lg text-gray-600 leading-relaxed">
                {item.description}
              </p>

              <Link
                to={item.href}
                className="mt-8 md:mt-10 inline-flex items-center gap-3 bg-[#F99B2A] text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full font-semibold hover:bg-[#E07B0A] hover:scale-105 transition-all duration-300"
              >
                Learn More
                <FaArrowRight className="text-sm md:text-base" />
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* ── IMPACT STATS ── */}
      <section className="bg-[#1A150D] text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 text-center">
            <div className="flex flex-col items-center">
              <h3 className="text-4xl md:text-5xl font-bold text-[#F99B2A]">
                500+
              </h3>
              <p className="mt-2 text-sm md:text-base text-white/60">
                Lives Impacted
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-4xl md:text-5xl font-bold text-[#F99B2A]">
                100+
              </h3>
              <p className="mt-2 text-sm md:text-base text-white/60">
                Volunteers
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-4xl md:text-5xl font-bold text-[#F99B2A]">
                5
              </h3>
              <p className="mt-2 text-sm md:text-base text-white/60">
                Active Initiatives
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-4xl md:text-5xl font-bold text-[#F99B2A]">
                3+
              </h3>
              <p className="mt-2 text-sm md:text-base text-white/60">
                Years of Impact
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTA />

      {/* ── FOOTER ── */}
      <Footer />
    </div>
  );
}