import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  FaBirthdayCake, 
  FaUtensils, 
  FaBus, 
  FaMapMarkerAlt, 
  FaHeart, 
  FaCheckCircle, 
  FaShieldAlt
} from 'react-icons/fa';

// Assets
import kidsPhoto from '../assets/image/empowerEd.jpg';
import celebrationPhoto from '../assets/image/empowerEd2.jpg';
import picnicPhoto from '../assets/image/empowerEd3.jpg';

const CELEBRATION_OPTIONS = [
  {
    id: 'cake',
    title: 'Birthday Celebration',
    badge: 'Option 01',
    icon: FaBirthdayCake,
    subtitle: 'Make it a proper birthday celebration.',
    features: [
      'Cake cutting ceremony',
      'Festive balloon & hall decoration',
      'Photo printouts for memory',
      'Interactive games & fun with children',
      'Group photographs with all students',
      'Special birthday song & card by children'
    ],
    bestFor: 'Anyone wanting a traditional birthday celebration—with a meaningful twist.'
  },
  {
    id: 'meal',
    title: 'Celebrate With a Meal',
    badge: 'Option 02',
    icon: FaUtensils,
    subtitle: 'Your birthday. Their special nutritious meal.',
    features: [
      'Nutritious, freshly prepared meal',
      'Personal food distribution by you',
      'Direct bonding and interaction',
      'Celebration photos & candid moments',
      'Warm birthday wishes from students',
      'Memories that touch lives deeply'
    ],
    bestFor: 'Sharing blessings through wholesome nourishment and togetherness.'
  },
  {
    id: 'picnic',
    title: 'Take Children on a Picnic',
    badge: 'Option 03',
    icon: FaBus,
    subtitle: 'Give them an unforgettable day outside.',
    features: [
      'Day outing outside the classroom',
      'Fun outdoor games & nature walks',
      'Picnic snacks & celebration lunch',
      'Memorable group activities',
      'High-quality event photography',
      'Pure joy, smiles and exploration'
    ],
    bestFor: 'Creating once-in-a-lifetime childhood memories and shared experiences.'
  }
];

const CENTRES = [
  { id: 'atari', name: 'Atari Centre', count: '60 students', location: 'Atari, Lucknow' },
  { id: 'ashiyana', name: 'Ashiyana Centre', count: '40 students', location: 'Ashiyana, Lucknow' },
  { id: 'telibagh', name: 'Telibagh Centre', count: '20 students', location: 'Telibagh, Lucknow' },
  { id: 'all', name: 'All Three Centres', count: '120 students', location: 'Combined Mega Celebration' }
];

export default function CelebrateBirthday() {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedCentre, setSelectedCentre] = useState('');

  // Form States
  const [fullName, setFullName] = useState('');
  const [birthdayDate, setBirthdayDate] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [guestCount, setGuestCount] = useState('');
  const [message, setMessage] = useState('');

  const [addOns, setAddOns] = useState({
    bringCake: false,
    askusCake: false,
    photography: false,
    returnGifts: false,
    customPlan: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCheckboxToggle = (key) => {
    setAddOns(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!fullName.trim() || !phone.trim() || !birthdayDate) {
      alert("Please enter your Full Name, Phone Number, and Birthday Date.");
      return;
    }
    if (!selectedOption) {
      alert("Please select a celebration type (Option 01, Option 02, or Option 03 above).");
      return;
    }
    if (!selectedCentre) {
      alert("Please select one of the education centres in Lucknow.");
      return;
    }

    const chosenPlan = CELEBRATION_OPTIONS.find(c => c.id === selectedOption)?.title || selectedOption;
    const chosenLoc = CENTRES.find(c => c.id === selectedCentre)?.name || selectedCentre;

    const selectedAddOns = Object.entries(addOns)
      .filter(([_, val]) => val)
      .map(([key]) => {
        if (key === 'bringCake') return 'Will bring own cake';
        if (key === 'askusCake') return 'Arrange fresh cake via AskUs Foundation';
        if (key === 'photography') return 'Photo/Video Documentation';
        if (key === 'returnGifts') return 'Stationary/Gifts for Children';
        if (key === 'customPlan') return 'Discuss custom celebration plan';
        return key;
      }).join(', ') || 'None';

    const textMessage = 
`🎂 *New Birthday Celebration Request - AskUs Foundation*
────────────────────────
👤 *Name:* ${fullName}
📅 *Birthday Date:* ${birthdayDate}
📞 *WhatsApp / Phone:* ${phone}
📧 *Email:* ${email || 'Not provided'}
🎉 *Celebration Type:* ${chosenPlan}
📍 *Centre:* ${chosenLoc}
👥 *Guests Attending:* ${guestCount || 'Not specified'}
🎁 *Add-ons Selected:* ${selectedAddOns}
💬 *Special Note:* ${message || 'None'}
────────────────────────
Sent via AskUs Foundation Website`;

    // Updated WhatsApp Number with Country Code (India +91)
    const foundationWhatsApp = "918009227002";
    const whatsappUrl = `https://wa.me/${foundationWhatsApp}?text=${encodeURIComponent(textMessage)}`;

    setIsSubmitted(true);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="font-sans bg-[#FBF9F3] text-gray-900 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        
        {/* ── 1. HERO SECTION ── */}
        <section className="relative w-full bg-[#1A150D] text-white py-20 md:py-28 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-25">
            <img 
              src={celebrationPhoto} 
              alt="AskUs Foundation Children Celebrating" 
              className="w-full h-full object-cover filter blur-[2px]"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A150D]/80 via-transparent to-[#1A150D]" />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F99B2A]/20 border border-[#F99B2A]/40 text-[#F99B2A] text-xs sm:text-sm font-semibold mb-6">
              <FaHeart /> Meaningful Birthday Celebrations • Lucknow
            </span>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              Your Birthday.<br />
              <span className="text-[#F99B2A]">Their Smile.</span><br />
              A Memory Forever.
            </h1>

            <p className="text-base sm:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              This year, celebrate your special day differently. Instead of celebrating only for yourself, share your happiness with the children of AskUs Foundation and create a memory that stays with you—and them.
            </p>

            <a
              href="#choose-celebration"
              className="inline-flex items-center gap-3 bg-[#F99B2A] hover:bg-[#E07B0A] text-white font-bold text-base md:text-lg py-4 px-9 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <FaBirthdayCake /> Celebrate With Our Children →
            </a>

            <p className="text-xs sm:text-sm text-gray-400 mt-4 tracking-wide">
              Choose your celebration • Pick a centre • We'll help you plan the rest
            </p>
          </div>
        </section>

        {/* ── 2. INTRODUCTION ── */}
        <section className="py-16 md:py-24 px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1A150D] leading-snug mb-6">
            What if your birthday could become someone else's happiest day?
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
            <p>
              Birthdays are usually about cake, gifts and celebrations. But sometimes, the most beautiful celebration is the one you share.
            </p>
            <p>
              At AskUs Foundation, you can celebrate your birthday with children from our education centres—bringing them joy, nutritious food, laughter and an experience they can remember.
            </p>
            <p className="font-semibold text-[#F99B2A]">
              You choose the way you want to celebrate. We help turn it into a beautiful memory.
            </p>
          </div>
        </section>

        {/* ── 3. CHOOSE YOUR CELEBRATION ── */}
        <section id="choose-celebration" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-[#F99B2A] uppercase tracking-wider block mb-2">Step 01</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Choose Your Celebration</h2>
            <p className="text-gray-500 text-sm mt-2">Select how you'd like to share your special day</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {CELEBRATION_OPTIONS.map((item) => {
              const Icon = item.icon;
              const isSelected = selectedOption === item.id;

              return (
                <div 
                  key={item.id}
                  onClick={() => setSelectedOption(item.id)}
                  className={`rounded-3xl p-8 transition-all duration-300 border-2 cursor-pointer flex flex-col justify-between ${
                    isSelected 
                      ? 'bg-white border-[#F99B2A] shadow-2xl ring-2 ring-[#F99B2A]/20 transform -translate-y-1.5' 
                      : 'bg-white border-gray-200 hover:border-amber-300 shadow-sm hover:shadow-md'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-bold px-3 py-1 bg-amber-50 text-[#F99B2A] rounded-full border border-[#F99B2A]/20 uppercase">
                        {item.badge}
                      </span>
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl transition-colors ${
                        isSelected ? 'bg-[#F99B2A] text-white' : 'bg-amber-100 text-[#F99B2A]'
                      }`}>
                        <Icon />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 font-medium mb-6">{item.subtitle}</p>

                    <div className="space-y-3 mb-8">
                      {item.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                          <FaCheckCircle className="text-emerald-500 mt-0.5 shrink-0 text-xs" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-100">
                    <p className="text-[11px] text-gray-400 italic mb-4">
                      <strong>Best for:</strong> {item.bestFor}
                    </p>
                    <a
                      href="#centre-selection"
                      className={`w-full py-3.5 rounded-xl font-bold text-sm block text-center transition-all ${
                        isSelected 
                          ? 'bg-[#F99B2A] hover:bg-[#E07B0A] text-white shadow-md' 
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                      }`}
                    >
                      {isSelected ? '✓ Selected' : `Choose ${item.title} →`}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── 4. CENTRE SELECTION ── */}
        <section id="centre-selection" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-[#F99B2A] uppercase tracking-wider block mb-2">Step 02</span>
            <h2 className="text-3xl font-extrabold text-gray-900">Where would you like to celebrate?</h2>
            <p className="text-gray-500 text-sm mt-1">Select one of our education centres in Lucknow</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CENTRES.map((centre) => {
              const isSelected = selectedCentre === centre.id;
              return (
                <div
                  key={centre.id}
                  onClick={() => setSelectedCentre(centre.id)}
                  className={`p-6 rounded-2xl border-2 transition-all cursor-pointer text-center flex flex-col justify-between ${
                    isSelected
                      ? 'bg-amber-50/80 border-[#F99B2A] shadow-md transform -translate-y-1'
                      : 'bg-white border-gray-200 hover:border-amber-300'
                  }`}
                >
                  <div>
                    <div className="w-10 h-10 bg-amber-100 text-[#F99B2A] rounded-xl flex items-center justify-center mx-auto mb-3">
                      <FaMapMarkerAlt />
                    </div>
                    <h3 className="font-bold text-gray-900 text-base">{centre.name}</h3>
                    <p className="text-xs text-gray-500 mt-1">{centre.location}</p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <span className="text-sm font-extrabold text-[#F99B2A] block mb-2">
                      {centre.count}
                    </span>
                    <button
                      type="button"
                      className={`w-full py-2 rounded-lg text-xs font-bold transition-colors ${
                        isSelected 
                          ? 'bg-[#F99B2A] text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {isSelected ? 'Selected' : 'Select'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── 5. PERSONALISE THE EXPERIENCE (FORM) ── */}
        <section id="booking-form" className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-12">
            <div className="text-center mb-10">
              <span className="text-xs font-bold text-[#F99B2A] uppercase tracking-wider block mb-2">Step 03</span>
              <h2 className="text-3xl font-extrabold text-gray-900">Let's Make Your Birthday Special</h2>
              <p className="text-gray-500 text-sm mt-1">Tell us about you so our team can coordinate seamlessly</p>
            </div>

            {isSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-2xl text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl">
                  <FaCheckCircle />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Celebration Request Received!</h3>
                <p className="text-gray-600 max-w-md mx-auto text-sm leading-relaxed">
                  Thank you, <strong className="text-gray-900">{fullName}</strong>! Your celebration request has been prepared and routed to our team. Our community coordinator will connect with you via WhatsApp/Call at <strong className="text-gray-900">{phone}</strong> within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-[#F99B2A] text-white text-xs font-bold rounded-xl"
                >
                  Submit Another Plan
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Your Full Name *
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="Enter your name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#F99B2A] focus:ring-1 focus:ring-[#F99B2A] outline-none text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Birthday Date *
                    </label>
                    <input 
                      type="date" 
                      required
                      value={birthdayDate}
                      onChange={(e) => setBirthdayDate(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#F99B2A] focus:ring-1 focus:ring-[#F99B2A] outline-none text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Phone Number (WhatsApp) *
                    </label>
                    <input 
                      type="tel" 
                      required
                      placeholder="Enter your WhatsApp number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#F99B2A] focus:ring-1 focus:ring-[#F99B2A] outline-none text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#F99B2A] focus:ring-1 focus:ring-[#F99B2A] outline-none text-sm"
                    />
                  </div>
                </div>

                {/* Summary Box */}
                {(selectedOption || selectedCentre) && (
                  <div className="p-4 bg-amber-50/60 rounded-xl border border-amber-200/60 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-gray-500 block">Selected Celebration:</span>
                      <strong className="text-gray-900 capitalize font-bold text-sm">
                        {CELEBRATION_OPTIONS.find(c => c.id === selectedOption)?.title || "None selected yet"}
                      </strong>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Chosen Centre:</span>
                      <strong className="text-gray-900 font-bold text-sm">
                        {CENTRES.find(c => c.id === selectedCentre)?.name || "None selected yet"}
                      </strong>
                    </div>
                  </div>
                )}

                {/* Visiting Guests */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    Number of Guests/Family Members Attending
                  </label>
                  <select 
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#F99B2A] focus:ring-1 focus:ring-[#F99B2A] outline-none text-sm bg-white"
                  >
                    <option value="">Select number of guests</option>
                    <option value="1">Just Me (1)</option>
                    <option value="1-2">1 to 2 Family Members</option>
                    <option value="3-5">3 to 5 Friends / Family</option>
                    <option value="6+">More than 5 people</option>
                    <option value="virtual">Cannot attend in person (Sponsor Celebration)</option>
                  </select>
                </div>

                {/* Custom Preferences / Add-ons */}
                <div className="pt-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-3">
                    Preferences & Add-ons:
                  </label>
                  <div className="space-y-2.5">
                    <label className="flex items-center gap-3 text-xs sm:text-sm text-gray-700 cursor-pointer">
                      <input 
                        type="checkbox"
                        checked={addOns.bringCake}
                        onChange={() => handleCheckboxToggle('bringCake')}
                        className="w-4 h-4 accent-[#F99B2A] rounded"
                      />
                      <span>I would like to bring my own cake</span>
                    </label>

                    <label className="flex items-center gap-3 text-xs sm:text-sm text-gray-700 cursor-pointer">
                      <input 
                        type="checkbox"
                        checked={addOns.askusCake}
                        onChange={() => handleCheckboxToggle('askusCake')}
                        className="w-4 h-4 accent-[#F99B2A] rounded"
                      />
                      <span>Arrange fresh cake through AskUs Foundation</span>
                    </label>

                    <label className="flex items-center gap-3 text-xs sm:text-sm text-gray-700 cursor-pointer">
                      <input 
                        type="checkbox"
                        checked={addOns.photography}
                        onChange={() => handleCheckboxToggle('photography')}
                        className="w-4 h-4 accent-[#F99B2A] rounded"
                      />
                      <span>Add photo/video documentation of the celebration</span>
                    </label>

                    <label className="flex items-center gap-3 text-xs sm:text-sm text-gray-700 cursor-pointer">
                      <input 
                        type="checkbox"
                        checked={addOns.returnGifts}
                        onChange={() => handleCheckboxToggle('returnGifts')}
                        className="w-4 h-4 accent-[#F99B2A] rounded"
                      />
                      <span>Add stationary/return gifts for children</span>
                    </label>

                    <label className="flex items-center gap-3 text-xs sm:text-sm text-gray-700 cursor-pointer">
                      <input 
                        type="checkbox"
                        checked={addOns.customPlan}
                        onChange={() => handleCheckboxToggle('customPlan')}
                        className="w-4 h-4 accent-[#F99B2A] rounded"
                      />
                      <span>Discuss a customized celebration plan</span>
                    </label>
                  </div>
                </div>

                {/* Special Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    Special Message or Request (Optional)
                  </label>
                  <textarea 
                    rows={3}
                    placeholder="Tell us any special wishes, dietary preferences, or ideas..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F99B2A] focus:ring-1 focus:ring-[#F99B2A] outline-none text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#F99B2A] hover:bg-[#E07B0A] text-white font-bold text-base rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
                >
                  Submit Celebration Request →
                </button>
              </form>
            )}
          </div>
        </section>

        {/* ── 6. HOW IT WORKS ── */}
        <section className="py-20 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-[#F99B2A] uppercase tracking-wider block mb-2">Simple Process</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                From Your Birthday to Their Smile
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
              <div className="p-6 rounded-2xl bg-amber-50/50 border border-amber-100">
                <span className="text-xs font-bold text-[#F99B2A] block mb-2">01 — CHOOSE</span>
                <h4 className="font-bold text-gray-900 text-base mb-1">Choose Plan</h4>
                <p className="text-xs text-gray-600">Select how you'd like to celebrate.</p>
              </div>

              <div className="p-6 rounded-2xl bg-amber-50/50 border border-amber-100">
                <span className="text-xs font-bold text-[#F99B2A] block mb-2">02 — SELECT</span>
                <h4 className="font-bold text-gray-900 text-base mb-1">Centre & Date</h4>
                <p className="text-xs text-gray-600">Choose the centre and your date.</p>
              </div>

              <div className="p-6 rounded-2xl bg-amber-50/50 border border-amber-100">
                <span className="text-xs font-bold text-[#F99B2A] block mb-2">03 — PLAN</span>
                <h4 className="font-bold text-gray-900 text-base mb-1">We Coordinate</h4>
                <p className="text-xs text-gray-600">Our team connects to finalize logistics.</p>
              </div>

              <div className="p-6 rounded-2xl bg-amber-50/50 border border-amber-100">
                <span className="text-xs font-bold text-[#F99B2A] block mb-2">04 — CELEBRATE</span>
                <h4 className="font-bold text-gray-900 text-base mb-1">Celebrate</h4>
                <p className="text-xs text-gray-600">Share your special day with the children.</p>
              </div>

              <div className="p-6 rounded-2xl bg-amber-50/50 border border-amber-100">
                <span className="text-xs font-bold text-[#F99B2A] block mb-2">05 — REMEMBER</span>
                <h4 className="font-bold text-gray-900 text-base mb-1">Keep Memories</h4>
                <p className="text-xs text-gray-600">Take home photos and lifetime joy.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. EMOTIONAL HIGHLIGHT BANNER ── */}
        <section className="relative py-24 px-6 text-white text-center bg-[#1A150D] overflow-hidden">
          <div className="max-w-3xl mx-auto relative z-10 space-y-4">
            <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight">
              Don't Just Celebrate Your Birthday.<br />
              <span className="text-[#F99B2A]">Share It.</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-300 font-light max-w-xl mx-auto leading-relaxed">
              A birthday lasts for a day. But the happiness you create for a child can become a memory they carry for much longer. Make your next birthday a little more meaningful.
            </p>
          </div>
        </section>

        {/* ── 8 & 9. REAL STORIES & PHOTO GALLERY (CLEAN PHOTOS ONLY) ── */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-[#F99B2A] uppercase tracking-wider block mb-2">Joyful Moments</span>
            <h2 className="text-3xl font-extrabold text-gray-900">Moments That Made Us Smile</h2>
            <p className="text-gray-500 text-sm mt-1">Glimpses of celebrations across our education centres</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="rounded-3xl overflow-hidden shadow-lg border-4 border-white group">
              <img 
                src={celebrationPhoto} 
                alt="Celebration moment 1" 
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>

            <div className="rounded-3xl overflow-hidden shadow-lg border-4 border-white group">
              <img 
                src={kidsPhoto} 
                alt="Celebration moment 2" 
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>

            <div className="rounded-3xl overflow-hidden shadow-lg border-4 border-white group">
              <img 
                src={picnicPhoto} 
                alt="Celebration moment 3" 
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
          </div>
        </section>

        {/* ── 10. SAFETY & PRIVACY NOTICE ── */}
        <section className="max-w-4xl mx-auto px-6 pb-12">
          <div className="p-5 bg-amber-50/60 rounded-2xl border border-amber-200/50 flex items-start gap-3 text-xs text-gray-600 leading-relaxed">
            <FaShieldAlt className="text-[#F99B2A] text-lg shrink-0 mt-0.5" />
            <p>
              <strong>Photography & Safeguarding:</strong> Photographs/videos taken during celebrations may be used by AskUs Foundation for documentation and awareness purposes, subject to applicable consent and child-safeguarding practices. Personal information submitted through this page will be handled respectfully according to our Privacy Policy.
            </p>
          </div>
        </section>

        {/* ── 11. FINAL CALL TO ACTION ── */}
        <section className="py-20 px-6 bg-[#161310] text-white text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              Your Birthday Is Coming.<br />
              <span className="text-[#F99B2A]">How will you celebrate it?</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-3 text-xs sm:text-sm font-semibold text-gray-300">
              <span className="px-3 py-1 bg-white/10 rounded-full">🎂 Cake Celebration</span>
              <span className="px-3 py-1 bg-white/10 rounded-full">🍱 Birthday Meal</span>
              <span className="px-3 py-1 bg-white/10 rounded-full">🚌 Children's Picnic</span>
            </div>

            <a
              href="#booking-form"
              className="inline-block bg-[#F99B2A] hover:bg-[#E07B0A] text-white font-bold text-base py-4 px-9 rounded-2xl shadow-xl transition-all cursor-pointer"
            >
              Start Planning My Birthday →
            </a>

            <p className="text-xs text-gray-500 tracking-wider uppercase">
              AskUs Foundation • Lucknow
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}