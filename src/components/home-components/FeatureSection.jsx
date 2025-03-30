import React from 'react'
import SectionHeading from '../generic-components/SectionHeading'
import ImageContainer from '../generic-components/ImageContainer'
import LaptopImage from '@images/template-laptop.jpg'
import CoalCard from '../generic-components/CoalCard'
import { faNetworkWired, faChevronRight, faBookBookmark } from '@fortawesome/free-solid-svg-icons'
import LinkButton from '../generic-components/LinkButton'

const FeatureSection = () => {
  return (
    <section className='home-feature-section bg-dark'>
        
        <div className="container">

            <div className="text-container">
                <SectionHeading subtitle={"MY FEATURES"} heading={"Let's create something special together"}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dui purus, dignissim ut consequat in, mattis eget sapien.</p>
                <div className='card-container'>
                    <CoalCard icon={faNetworkWired} heading={"Techstack"} text={"Explore my complete techstack and how I can help you to create something great."} />
                    <CoalCard icon={faBookBookmark} heading={"Expertise"} text={"Read more about my areas of expertise that have been perfected with experience."} />
                </div>
                <div className='tablet-hidden'>
                    <LinkButton color={"theme"} url={"/services"} text={"My services"} icon={faChevronRight} />
                </div>
            </div>

            <ImageContainer imgSrc={LaptopImage} imgAlt={"Working person"} />
            <div className='desktop-hidden'>
                <LinkButton color={"theme"} url={"/services"} text={"My services"} icon={faChevronRight} />
            </div>

        </div>

    </section>
  )
}

export default FeatureSection