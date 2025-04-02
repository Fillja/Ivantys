import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/home-components/HeroSection'
import ExpertiseSection from '../components/home-components/ExpertiseSection'
import FeatureSection from '../components/home-components/FeatureSection'
import AboutSection from '../components/home-components/AboutSection'

const Home = () => {
  return (
    <>
      <Header/>
      <HeroSection/>
      <ExpertiseSection/>
      <FeatureSection/>
      <AboutSection/>
    </>
  )
}

export default Home