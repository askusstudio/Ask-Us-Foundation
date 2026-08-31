import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaHeart, FaLock, FaShieldAlt } from 'react-icons/fa';
import axios from 'axios';
import { useSearchParams, useNavigate } from 'react-router-dom';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";

const Donate = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const campaignId = searchParams.get('campaignId');
  const campaignTitle = searchParams.get('campaignTitle');
  const wing = searchParams.get('wing') || 'WOMEN_WING';

  const [amount, setAmount] = useState('1000');
  const [customAmount, setCustomAmount] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [hideFromLeaderboard, setHideFromLeaderboard] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const predefinedAmounts = [
    { value: '500', label: '₹500', impact: 'Provides meals for a child for a week.' },
    { value: '1000', label: '₹1000', impact: 'Supports education supplies for one student.' },
    { value: '2500', label: '₹2500', impact: 'Funds a RevolutioNAARI skill training kit.' },
    { value: '5000', label: '₹5000', impact: 'Sponsors a complete health camp setup.' },
  ];

  const handleAmountSelect = (val) => {
    setAmount(val);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    const val = e.target.value;
    // Allow empty or positive numbers only
    if (val === '' || Number(val) >= 0) {
      setCustomAmount(val);
      setAmount('custom');
    }
  };

  const handleDonate = async () => {
    if (!firstName.trim() || !email.trim()) {
      alert("Please enter your name and email!");
      return;
    }

    const finalAmount = amount === 'custom' ? customAmount : amount;
    if (!finalAmount || Number(finalAmount) <= 0) {
      alert("Please enter a valid donation amount (minimum ₹1)!");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(`${API_BASE_URL}/razorpay/donation/create-order`, {
        amount: parseInt(finalAmount, 10),
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        wing,
        hideFromLeaderboard,
        campaignId: campaignId || null,
      });

      const order = response.data;

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY || "rzp_test_dummy",
        amount: order.amount,
        currency: order.currency,
        name: "Askus Foundation",
        description: campaignTitle || `${wing.replace('_', ' ')} Donation`,
        order_id: order.id,

        prefill: {
          name: `${firstName} ${lastName}`.trim(),
          email: email.trim(),
          contact: phone.trim(),
        },

        handler: async function (paymentResponse) {
          setIsLoading(true);
          try {
            const verifyRes = await axios.post(`${API_BASE_URL}/razorpay/payment/verify`, {
              razorpay_payment_id: paymentResponse.razorpay_payment_id,
              razorpay_order_id: paymentResponse.razorpay_order_id,
              razorpay_signature: paymentResponse.razorpay_signature,
            });

            if (verifyRes.data.status === "success") {
              navigate('/thank-you', {
                state: {
                  fullName: `${firstName} ${lastName}`.trim(),
                  amount: finalAmount,
                  date: new Date().toLocaleDateString('en-IN', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                  }),
                  paymentId: paymentResponse.razorpay_payment_id,
                },
              });
            } else {
              alert("Payment verification issue! Contact: askusfoundation.lko@gmail.com\nPayment ID: " + paymentResponse.razorpay_payment_id);
            }
          } catch (err) {
            console.error(err);
            alert("Verification failed. Contact support with Payment ID: " + paymentResponse.razorpay_payment_id);
          } finally {
            setIsLoading(false);
          }
        },

        modal: {
          ondismiss: function () {
            setIsLoading(false);
          }
        },

        theme: { color: "#F99B2A" },
      };

      const rzp = new window.Razorpay(options);
      // Dismiss the initial loading modal once Razorpay modal is opened
      setIsLoading(false);
      rzp.open();

    } catch (error) {
      alert("Something went wrong, Please Try Again");
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="font-sans bg-[#FBF9F3] min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pb-24">

        {/* HERO SECTION */}
        <div className="bg-[#1A150D] py-16 md:py-24 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Your Contribution Creates <span className="text-[#F99B2A]">Lasting Impact</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              {campaignTitle
                ? `Supporting: ${campaignTitle}`
                : `Join us in supporting our ${wing ? wing.replace('_', ' ') : 'Foundation'} initiatives to build a stronger community.`}
            </p>
          </div>
        </div>

        {/* DONATION SECTION */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

            {/* LEFT: DONATION FORM */}
            <div className="lg:col-span-3 bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-gray-100">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Choose Your Donation</h2>

              {/* Amount Selection */}
              <div className="mb-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {predefinedAmounts.map((item) => (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() => handleAmountSelect(item.value)}
                      className={`py-4 rounded-2xl font-bold text-lg transition-all duration-300 border-2 
                        ${amount === item.value
                          ? 'bg-[#F99B2A] text-white border-[#F99B2A] shadow-md transform -translate-y-1'
                          : 'bg-white text-gray-600 border-gray-200 hover:border-[#F99B2A] hover:text-[#F99B2A]'
                        }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold text-xl">₹</span>
                  <input
                    type="number"
                    min="1"
                    placeholder="Enter Custom Amount"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    className={`w-full pl-10 pr-4 py-4 rounded-2xl border-2 outline-none text-lg font-semibold transition-colors
                      ${amount === 'custom' ? 'border-[#F99B2A] ring-1 ring-[#F99B2A]' : 'border-gray-200 focus:border-[#F99B2A]'}`}
                  />
                </div>

                {/* Impact Text */}
                <div className="mt-4 p-4 bg-orange-50 rounded-xl flex items-start gap-3">
                  <FaHeart className="text-[#F99B2A] mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-700 font-medium">
                    {amount !== 'custom'
                      ? predefinedAmounts.find(a => a.value === amount)?.impact
                      : 'Every rupee counts! Your custom donation will be utilized where it is needed the most.'}
                  </p>
                </div>
              </div>

              {/* Personal Details */}
              <div className="mb-8 space-y-5">
                <h3 className="text-xl font-bold text-gray-900">Your Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="First Name *"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#F99B2A] focus:ring-1 focus:ring-[#F99B2A] outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#F99B2A] focus:ring-1 focus:ring-[#F99B2A] outline-none"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#F99B2A] focus:ring-1 focus:ring-[#F99B2A] outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone Number (For Updates)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#F99B2A] focus:ring-1 focus:ring-[#F99B2A] outline-none"
                />

                {/* Hide from leaderboard checkbox */}
                <div className="pt-2 flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="hideLeaderboard"
                    checked={hideFromLeaderboard}
                    onChange={(e) => setHideFromLeaderboard(e.target.checked)}
                    className="w-5 h-5 accent-[#F99B2A] rounded border-gray-300 cursor-pointer"
                  />
                  <label htmlFor="hideLeaderboard" className="text-sm font-medium text-gray-700 select-none cursor-pointer">
                    Do not show my name in the leaderboard (optional)
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleDonate}
                disabled={isLoading}
                className="w-full bg-[#F99B2A] hover:bg-[#E07B0A] text-white font-bold text-lg py-5 rounded-2xl transition-all duration-300 shadow-[0_8px_30px_rgb(249,155,42,0.3)] hover:shadow-[0_8px_30px_rgb(249,155,42,0.5)] transform hover:-translate-y-1 disabled:opacity-50"
              >
                {isLoading ? "Processing..." : `Donate ${amount === 'custom' ? (customAmount ? `₹${customAmount}` : '') : `₹${amount}`} Now`}
              </button>

              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
                <FaLock />
                <span>100% Secure & Encrypted Payment</span>
              </div>
            </div>

            {/* RIGHT: TRUST & INFO */}
            <div className="lg:col-span-2 space-y-8 mt-10 lg:mt-0">
              <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <FaShieldAlt className="text-green-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">100% Transparency</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every rupee you donate is fully traceable. We ensure complete accountability and utilize funds directly towards on-ground execution of our projects.
                </p>
              </div>

              <div className="bg-[#1A150D] rounded-3xl p-8 shadow-md text-white">
                <h3 className="text-xl font-bold text-[#F99B2A] mb-6">Need Help?</h3>
                <div className="space-y-4 text-sm text-gray-300">
                  <div>
                    <strong className="block text-white mb-1">Is my donation tax-deductible?</strong>
                    <p>Yes, all donations to Askus Foundation are eligible for tax exemption under section 80G of the Income Tax Act.</p>
                  </div>
                  <div>
                    <strong className="block text-white mb-1">How can I contact support?</strong>
                    <p>You can reach us directly at <a href="mailto:askusfoundation.lko@gmail.com" className="text-[#F99B2A] hover:underline">askusfoundation.lko@gmail.com</a> or call us at +91 94514 81141.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* PROCESSING PAYMENT MODAL */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl border border-gray-100 animate-in fade-in zoom-in duration-200">
            <h3 className="text-xl font-bold text-gray-900 mb-1">Processing your payment</h3>
            <p className="text-xs text-gray-500 mb-6">This will only take a few seconds.</p>

            <div className="my-6 flex justify-center">
              <div className="w-16 h-16 border-4 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
            </div>

            <button
              type="button"
              onClick={() => setIsLoading(false)}
              className="w-full py-3 text-sm text-[#7A4B1A] font-semibold border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Donate;