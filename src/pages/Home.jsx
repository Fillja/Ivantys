import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/home-components/HeroSection'
import ExpertiseSection from '../components/home-components/ExpertiseSection'
import FeatureSection from '../components/home-components/FeatureSection'

const Home = () => {
  return (
    <>
      <Header/>
      <HeroSection/>
      <ExpertiseSection/>
      <FeatureSection/>
    </>
  )
}

export default Home