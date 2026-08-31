import React, { useRef, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaDownload, FaShareAlt, FaCheckCircle, FaHome } from 'react-icons/fa';
import certificateBg from '../assets/image/certificate_bg.png';

const ThankYou = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const [certificateUrl, setCertificateUrl] = useState(null);
  const [isGenerating, setIsGenerating] = useState(true);

  // Data passed from Donate.jsx via navigate state
  const { fullName = "Valued Supporter", amount = "1000", date, paymentId } = location.state || {};

  const displayDate = date || new Date().toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const templateImg = new Image();
    templateImg.crossOrigin = 'anonymous';
    templateImg.src = certificateBg;

    templateImg.onload = () => {
      // Set high-resolution canvas size to match the original certificate template
      canvas.width = templateImg.width || 2000;
      canvas.height = templateImg.height || 1414;

      // 1. Draw the official certificate background
      ctx.drawImage(templateImg, 0, 0, canvas.width, canvas.height);

// 2. Draw Donor Full Name (Balanced elegant font size & spacing)
      ctx.fillStyle = '#0F172A';
      ctx.textAlign = 'center';
      ctx.font = `600 ${Math.round(canvas.width * 0.026)}px 'Cinzel', 'Georgia', serif`;
      ctx.fillText(fullName, canvas.width / 2, canvas.height * 0.515);

      // 3. Draw Issue Date (Above the bottom-left ISSUE DATE line)
      ctx.fillStyle = '#344054';
      ctx.textAlign = 'left';
      ctx.font = `600 ${Math.round(canvas.width * 0.017)}px sans-serif`;
      ctx.fillText(displayDate, canvas.width * 0.175, canvas.height * 0.845);

      // 4. Generate downloadable image url
      const dataUrl = canvas.toDataURL('image/png', 1.0);
      setCertificateUrl(dataUrl);
      setIsGenerating(false);
    };

    templateImg.onerror = (err) => {
      console.error('Failed to load certificate template image.', err);
      setIsGenerating(false);
    };
  }, [fullName, displayDate]);

  const handleDownload = () => {
    if (!certificateUrl) return;
    const link = document.createElement('a');
    link.href = certificateUrl;
    link.download = `Askus-Foundation-Certificate-${fullName?.replace(/\s+/g, '-')}.png`;
    link.click();
  };

  const handleShare = async () => {
    if (!certificateUrl) return;

    try {
      const res = await fetch(certificateUrl);
      const blob = await res.blob();
      const file = new File([blob], 'donation-certificate.png', { type: 'image/png' });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: 'I just donated to Askus Foundation!',
          text: `I contributed ₹${amount} to Askus Foundation towards building a Shreshth Bharat. Join me!`,
          files: [file],
        });
      } else {
        handleDownload();
        alert('Sharing directly is not supported on this device/browser. Your certificate has been downloaded!');
      }
    } catch (err) {
      if (err.name !== 'AbortError') {
        console.error('Share failed:', err);
      }
    }
  };

  return (
    <div className="font-sans bg-[#FBF9F3] min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-6 animate-bounce" />
          
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3">
            Thank You, {fullName.split(' ')[0]}!
          </h1>
          <p className="text-gray-600 text-lg mb-2">
            Your generous contribution of <span className="font-bold text-[#F99B2A]">₹{Number(amount).toLocaleString('en-IN')}</span> has been successfully received.
          </p>
          {paymentId && (
            <p className="text-gray-400 text-xs sm:text-sm mb-8 tracking-wider">Payment ID: {paymentId}</p>
          )}

          {/* Hidden Canvas used for generating high-definition certificate */}
          <canvas ref={canvasRef} style={{ display: 'none' }} />

          {/* Certificate Display Card */}
          <div className="bg-white rounded-3xl shadow-xl p-4 md:p-8 border border-gray-100 mb-8 max-w-3xl mx-auto">
            {isGenerating ? (
              <div className="py-28 text-gray-400 flex flex-col items-center gap-3">
                <div className="w-10 h-10 border-4 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
                <span>Generating your high-resolution certificate...</span>
              </div>
            ) : certificateUrl ? (
              <img
                src={certificateUrl}
                alt="Donation Certificate"
                className="w-full rounded-xl shadow-lg border border-gray-200 object-contain"
              />
            ) : (
              <div className="py-24 text-red-500 font-medium">
                Couldn't generate certificate preview, but your donation was recorded successfully.
              </div>
            )}
          </div>

          {/* Actions */}
          {certificateUrl && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleDownload}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#F99B2A] hover:bg-[#E07B0A] text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-lg hover:-translate-y-1 cursor-pointer"
              >
                <FaDownload /> Download Certificate
              </button>
              <button
                onClick={handleShare}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#1A150D] hover:bg-black text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-lg hover:-translate-y-1 cursor-pointer"
              >
                <FaShareAlt /> Share Certificate
              </button>
              <button
                onClick={() => navigate('/')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-4 px-6 rounded-2xl transition-all cursor-pointer"
              >
                <FaHome /> Home
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYou;