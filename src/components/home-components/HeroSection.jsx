import React from 'react'
import LinkButton from '../generic-components/LinkButton'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import HeroImage from '@images/template-headshot.jpg'

const HeroSection = () => {
  return (
    <section className="home-hero-section bg-dark">

        <div className="container">

            <div className="content-container">

                <div className="heading-container">
                    <span className='subtitle'>Web Developer</span>
                    <h1>Robin Gombkötö</h1>
                </div>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dui purus, dignissim ut consequat in, mattis eget sapien. Pellentesque non sodales enim, ut dapibus massa.</p>
                
                <div>
                    <LinkButton color={"theme"} url={"/contact"} text={"Contact me"} icon={faChevronRight} />
                </div>

            </div>

            <div className='image-container'>
                <img className="image" src={HeroImage} alt="Hero image" />
            </div>
        </div>

    </section>
  )
}

export default HeroSection