import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Membership from "./pages/Membership"
import Initiative from "./pages/Initiative"
import Projects from "./pages/Project"
import ProjectDetail from "./pages/ProjectDetail"
import Impact from "./pages/Impact"
import GalleryPage from "./pages/GalleryPage"
import ScrollToTop from './components/ScrollToTop'
import Donate from "./pages/Donate"
import WingsDetail from "./pages/Wing"
import ThankYou from "./pages/ThankYou"
import LegalPolicy from "./pages/LegalPolicy"

// New Pages
import SharangMemory from "./pages/SharangMemory"
import CelebrateBirthday from "./pages/CelebrateBirthday"

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/membership" element={<Membership />} />
        
        {/* Initiatives Routes */}
        <Route path="/initiative" element={<Initiative />} />
        <Route path="/initiatives" element={<Initiative />} />
        <Route path="/revolutionaari" element={<Initiative />} />
        <Route path="/empowered" element={<Initiative />} />
        <Route path="/pawer-rangers" element={<Initiative />} />
        <Route path="/green-squad" element={<Initiative />} />
        <Route path="/little-legends" element={<Initiative />} />

        {/* Sharang 2026 Digital Memory Card Routes */}
        <Route path="/sharang" element={<SharangMemory />} />
        <Route path="/sharang-2026" element={<SharangMemory />} />
        <Route path="/sharang-memories" element={<SharangMemory />} />

        {/* Celebrate Your Birthday Campaign Routes */}
        <Route path="/celebrate-your-birthday" element={<CelebrateBirthday />} />
        <Route path="/birthday" element={<CelebrateBirthday />} />

        {/* Projects, Impact & Donate */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/wing/:title" element={<WingsDetail />} />
        <Route path="/thank-you" element={<ThankYou />} />

        {/* Legal & Compliance Routes */}
        <Route path="/privacy-policy" element={<LegalPolicy />} />
        <Route path="/privacy" element={<LegalPolicy />} />
        <Route path="/terms" element={<LegalPolicy />} />
        <Route path="/terms-and-conditions" element={<LegalPolicy />} />
        <Route path="/refund-policy" element={<LegalPolicy />} />
        <Route path="/donation-policy" element={<LegalPolicy />} />
        <Route path="/shipping-policy" element={<LegalPolicy />} />
        <Route path="/contact" element={<LegalPolicy />} />
        <Route path="/help" element={<LegalPolicy />} />
        <Route path="/disclaimer" element={<LegalPolicy />} />
        <Route path="/copyright" element={<LegalPolicy />} />
        <Route path="/hyperlink" element={<LegalPolicy />} />
        <Route path="/accessibility" element={<LegalPolicy />} />
        <Route path="/cyber-security" element={<LegalPolicy />} />
        <Route path="/screen-reader" element={<LegalPolicy />} />

        {/* Catch-all fallback */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App