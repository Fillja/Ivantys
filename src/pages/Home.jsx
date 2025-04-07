import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/home-components/HeroSection'
import ExpertiseSection from '../components/home-components/ExpertiseSection'
import FeatureSection from '../components/home-components/FeatureSection'
import AboutSection from '../components/home-components/AboutSection'
import ContactSection from '../components/home-components/ContactSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Header/>
      <HeroSection/>
      <ExpertiseSection/>
      <FeatureSection/>
      <AboutSection/>
      <ContactSection/>
      <Footer />
    </>
  )
}

export default Home