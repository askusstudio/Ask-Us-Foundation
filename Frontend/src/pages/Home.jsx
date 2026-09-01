import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Gallery from '../components/Gallery'
import Wings from '../components/Wings'
import SupportForm from '../components/SupportSection'
import EmotionalCard from '../components/EmotionalCard'
import Footer from '../components/Footer'
import CTA from '../components/CTA'
import SharangPopup from '../components/SharangPopup'

const Home = () => {
    return (
        <div className='relative'>
            <SharangPopup />
            <Navbar />
            <Hero />
            <Gallery />
            <Wings />
            <EmotionalCard />
            <CTA />
            <SupportForm />
            <Footer />
        </div>
    )
}

export default Home