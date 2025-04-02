import React from 'react'
import LinkButton from '../generic-components/LinkButton'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import HeroImage from '@images/template-headshot.jpg'
import ImageContainer from '../generic-components/ImageContainer'

const HeroSection = () => {
  return (
    <section className="home-hero-section bg-dark">

        <div className="container">

            <div className="text-container">

                <div className="section-heading">
                    <span className='subtitle'>Fullstack Developer</span>
                    <h1 className="heading">Robin Gombkötö</h1>
                </div>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dui purus, dignissim ut consequat in, mattis eget sapien. Pellentesque non sodales enim, ut dapibus massa.</p>
                
                <div>
                    <LinkButton color={"theme"} url={"/contact"} text={"Contact me"} icon={faChevronRight} />
                </div>

            </div>

            <ImageContainer imgSrc={HeroImage} imgAlt={"Hero image"}/>
        </div>

    </section>
  )
}

export default HeroSection