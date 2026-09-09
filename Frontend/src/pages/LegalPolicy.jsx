import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const policiesData = {
  privacy: {
    title: "Privacy Policy",
    effective: "24 September 2024",
    content: (
      <>
        <div className="bg-amber-50/60 p-4 rounded-xl border border-amber-100 mb-6 text-xs text-gray-700 space-y-1">
          <p><strong>Legal Name:</strong> Revolutionaari Askus Foundation</p>
          <p><strong>CIN:</strong> U88900UP2025NPL216867</p>
          <p><strong>Registered Address:</strong> 570/S-83, Ram Nageena Pan, Fauzi Colony, Azad Nagar, Alambagh, Lucknow, UP, 226005, India</p>
        </div>
        <h3>1. Information We Collect</h3>
        <p>Depending upon how you interact with us, we collect Personal Information (name, email, mobile number, postal address, DOB, profile photos, volunteer preferences), Donation Information (amount, campaign, transaction ID, billing details), Volunteer/Event Information, and technical log data.</p>
        <p className="bg-gray-100 p-3 rounded-lg text-xs italic">Payment credentials such as card numbers, CVV, passwords, UPI PINs or banking authentication details are handled directly by authorised payment service providers. AskUs Foundation does not ask users to disclose such credentials.</p>
        
        <h3>2. How We Use Information</h3>
        <p>Personal information is utilized for recording donations, issuing receipts, managing volunteers & memberships, monitoring programme participation, reporting impact, preventing security incidents, and statutory regulatory compliance.</p>
        
        <h3>3. Data Retention & Safeguarding</h3>
        <p>We retain personal information only for legitimate administrative, accounting, legal or safeguarding requirements. Technical and organizational measures are deployed to protect donor and beneficiary records from unauthorized disclosure.</p>

        <h3>4. Privacy Grievances & Contact</h3>
        <p>For any data access, rectification or deletion requests, contact our Web Information Manager at <strong>askusfoundation.lko@gmail.com</strong> or call <strong>+91 94514 81141</strong>.</p>
      </>
    )
  },
  terms: {
    title: "Terms & Conditions",
    effective: "24 September 2024",
    content: (
      <>
        <h3>1. About AskUs Foundation</h3>
        <p>Revolutionaari Askus Foundation operates digital platforms for awareness, charitable activities, social-impact programmes, donations, volunteering, events, and community development.</p>
        
        <h3>2. Prohibited Activities</h3>
        <p>Users must not use the Platform for unlawful purposes, impersonate individuals, upload malicious software, interfere with platform security, or conduct unauthorized fundraising using our brand identity.</p>

        <h3>3. Intellectual Property</h3>
        <p>All trademarks, logos, creatives, reports, photos, and source code are protected under applicable intellectual-property laws and remain the exclusive property of Revolutionaari Askus Foundation.</p>

        <h3>4. Governing Law & Jurisdiction</h3>
        <p>These Terms are governed by the laws of India. Courts having appropriate jurisdiction over Lucknow, Uttar Pradesh have exclusive jurisdiction over any disputes.</p>
      </>
    )
  },
  refund: {
    title: "Donation, Refund & Cancellation Policy",
    effective: "24 September 2024",
    content: (
      <>
        <h3>1. Voluntary Contributions</h3>
        <p>All donations made through our Platform are voluntary charitable contributions. Donors should verify details and campaigns prior to payment submission.</p>

        <h3>2. Unrestricted vs Designated Donations</h3>
        <p>Unrestricted donations are deployed to areas of greatest operational priority. Where a specific project becomes impractical to complete, funds may be redirected towards a substantially similar social impact cause.</p>

        <h3>3. Refund & Cancellation Terms</h3>
        <p>Donations are generally non-refundable once processed. However, refund requests will be examined in bona fide circumstances:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Duplicate payment debits</li>
          <li>Technical processing errors / Server timeouts</li>
          <li>Incorrect transaction amounts</li>
          <li>Unauthorized or fraudulent card activity (subject to verification)</li>
        </ul>
        <p>Refund claims must be raised within <strong>30 days</strong> of transaction with the transaction/reference ID, donor name, and debit proof sent to <strong>askusfoundation.lko@gmail.com</strong>.</p>
      </>
    )
  },
  disclaimer: {
    title: "Disclaimer",
    effective: "24 September 2024",
    content: (
      <>
        <h3>1. No Professional Advice</h3>
        <p>Information provided through the website does not constitute legal, medical, investment, or tax advice. Donors and participants should seek qualified professional counsel where applicable.</p>
        
        <h3>2. Programme & Outcome Estimates</h3>
        <p>Beneficiary statistics and impact metrics are published in good faith for awareness. Participation or donations do not guarantee a predetermined social, commercial or educational outcome.</p>
      </>
    )
  },
  copyright: {
    title: "Copyright Policy",
    effective: "24 September 2024",
    content: (
      <>
        <h3>1. Protected Content</h3>
        <p>All logos, campaign designs, annual reports, software code, publications, and photographic works are owned or licensed by Revolutionaari Askus Foundation.</p>
        
        <h3>2. Permitted Use</h3>
        <p>Content may be shared strictly for non-commercial educational or awareness purposes with clear attribution to AskUs Foundation. Commercial copying, alteration, or unauthorised solicitation is strictly prohibited.</p>
      </>
    )
  },
  hyperlink: {
    title: "Hyperlinking Policy",
    effective: "24 September 2024",
    content: (
      <>
        <h3>1. Linking to Our Website</h3>
        <p>Third parties are permitted to link to publicly accessible pages of www.askusfoundation.org provided the link is not deceptive, does not imply false sponsorship, and does not harm our reputation.</p>
        
        <h3>2. External Links Disclaimer</h3>
        <p>AskUs Foundation is not responsible for the contents, privacy practices, or availability of third-party websites linked through our platform.</p>
      </>
    )
  },
  accessibility: {
    title: "Accessibility Statement",
    effective: "24 September 2024",
    content: (
      <>
        <h3>1. Inclusive Digital Experience</h3>
        <p>We actively work to ensure compliance with WCAG accessibility guidelines, incorporating responsive typography, appropriate colour contrasts, accessible forms, and screen-reader support.</p>
        
        <h3>2. Assistance & Feedback</h3>
        <p>If you encounter difficulty accessing any content, contact our support team at <strong>+91 94514 81141</strong> or email <strong>askusfoundation.lko@gmail.com</strong>.</p>
      </>
    )
  }
};

export default function LegalPolicy() {
  const location = useLocation();
  const path = location.pathname.toLowerCase();

  let activeKey = "privacy";
  if (path.includes("term")) activeKey = "terms";
  else if (path.includes("refund") || path.includes("donation")) activeKey = "refund";
  else if (path.includes("disclaimer")) activeKey = "disclaimer";
  else if (path.includes("copyright")) activeKey = "copyright";
  else if (path.includes("hyperlink")) activeKey = "hyperlink";
  else if (path.includes("access")) activeKey = "accessibility";

  const policy = policiesData[activeKey] || policiesData.privacy;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="font-sans min-h-screen bg-[#FBF9F3] flex flex-col">
      <Navbar />

      <main className="flex-grow max-w-5xl mx-auto w-full px-6 py-12 md:py-16">
        {/* Navigation Badges */}
        <div className="flex flex-wrap gap-2 mb-8 pb-4 border-b border-gray-200 text-xs">
          <Link to="/privacy-policy" className={`px-3 py-1.5 rounded-lg font-bold transition-all ${activeKey === 'privacy' ? 'bg-[#F99B2A] text-white shadow-sm' : 'bg-white text-gray-700 hover:bg-gray-100'}`}>Privacy Policy</Link>
          <Link to="/terms" className={`px-3 py-1.5 rounded-lg font-bold transition-all ${activeKey === 'terms' ? 'bg-[#F99B2A] text-white shadow-sm' : 'bg-white text-gray-700 hover:bg-gray-100'}`}>Terms</Link>
          <Link to="/refund-policy" className={`px-3 py-1.5 rounded-lg font-bold transition-all ${activeKey === 'refund' ? 'bg-[#F99B2A] text-white shadow-sm' : 'bg-white text-gray-700 hover:bg-gray-100'}`}>Donation & Refund</Link>
          <Link to="/disclaimer" className={`px-3 py-1.5 rounded-lg font-bold transition-all ${activeKey === 'disclaimer' ? 'bg-[#F99B2A] text-white shadow-sm' : 'bg-white text-gray-700 hover:bg-gray-100'}`}>Disclaimer</Link>
          <Link to="/copyright" className={`px-3 py-1.5 rounded-lg font-bold transition-all ${activeKey === 'copyright' ? 'bg-[#F99B2A] text-white shadow-sm' : 'bg-white text-gray-700 hover:bg-gray-100'}`}>Copyright</Link>
          <Link to="/hyperlink" className={`px-3 py-1.5 rounded-lg font-bold transition-all ${activeKey === 'hyperlink' ? 'bg-[#F99B2A] text-white shadow-sm' : 'bg-white text-gray-700 hover:bg-gray-100'}`}>Hyperlinking</Link>
          <Link to="/accessibility" className={`px-3 py-1.5 rounded-lg font-bold transition-all ${activeKey === 'accessibility' ? 'bg-[#F99B2A] text-white shadow-sm' : 'bg-white text-gray-700 hover:bg-gray-100'}`}>Accessibility</Link>
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Institutional Compliance</span>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">{policy.title}</h1>
          <p className="text-xs text-gray-500 mb-8">Effective Date & Last Updated: {policy.effective}</p>

          <div className="prose prose-sm sm:prose max-w-none text-gray-700 leading-relaxed space-y-4 prose-headings:font-bold prose-headings:text-gray-900 prose-headings:mt-6 prose-headings:mb-2">
            {policy.content}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}