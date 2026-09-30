import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import SharangLandingSection from '../components/SharangLandingSection'
import Gallery from '../components/Gallery'
import Wings from '../components/Wings'
import BirthdayCampaignCard from '../components/BirthdayCampaignCard'
import EmotionalCard from '../components/EmotionalCard'
import CTA from '../components/CTA'
import SupportForm from '../components/SupportSection'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div className='relative'>
            <Navbar />
            <Hero />
            
            {/* Sharang 2026 Dedicated Photo Collage Section */}
            <SharangLandingSection />

            <Gallery />
            <Wings />

            {/* Celebrate Birthday Campaign Section */}
            <BirthdayCampaignCard />

            <EmotionalCard />
            <CTA />
            <SupportForm />
            <Footer />
        </div>
    )
}

export default Home