import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function CampaignCard({ id, image, title, description, raised, goal, donations }) {
  // Cap the progress at 100% so the bar doesn't overflow
  const progress = Math.min((raised / goal) * 100, 100);
  // Support both a single image (string) and multiple images (array) for auto-slide
  const images = Array.isArray(image) ? image : [image];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#F7EDD1] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full w-full max-w-[450px] mx-auto"
    >
      {/* Image */}
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden shrink-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            src={images[activeIndex]}
            alt={title}
            className="w-full h-full object-cover absolute inset-0"
          />
        </AnimatePresence>

        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? "w-4 bg-white" : "w-1.5 bg-white/60"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 md:p-6 flex flex-col flex-grow">
        <h3 className="text-xl sm:text-2xl font-bold text-[#1A150D] mb-2 line-clamp-2">
          {title}
        </h3>

        <div className="mb-6">
          <p className={`text-sm sm:text-base text-gray-700 leading-relaxed ${!isExpanded ? "line-clamp-3" : ""}`}>
            {description}
          </p>
          {description && description.length > 110 && (
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-[#E07B0A] hover:text-[#C56500] font-bold text-xs sm:text-sm mt-1.5 inline-block cursor-pointer underline underline-offset-2"
            >
              {isExpanded ? "Show Less" : "Read More"}
            </button>
          )}
        </div>

        {/* Progress Section (Pushed to the bottom using mt-auto) */}
        <div className="mt-auto">

          {/* Progress Bar */}
          <div className="w-full bg-gray-300/60 rounded-full h-2 sm:h-2.5 mb-3 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${progress}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="bg-amber-500 h-full rounded-full"
            />
          </div>

          {/* Stats */}
          <div className="flex justify-between items-end text-sm sm:text-base mb-6">
            <div>
              <p className="font-bold text-[#1A150D]">₹{raised.toLocaleString('en-IN')}</p>
              <p className="text-xs sm:text-sm text-gray-600">of ₹{goal.toLocaleString('en-IN')}</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-[#1A150D]">{donations}</p>
              <p className="text-xs sm:text-sm text-gray-600">donations</p>
            </div>
          </div>

          {/* Button */}
          <Link
            to={
              id === 'sharang'
                ? '/sharang'
                : `/donate?campaignId=${id}&campaignTitle=${encodeURIComponent(title)}`
            }
            className="w-full sm:w-auto px-8 py-3.5 text-center text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 text-sm tracking-wide bg-[#F99B2A] hover:bg-[#E07B0A] shadow-lg hover:shadow-xl block"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </motion.div>
  );
}