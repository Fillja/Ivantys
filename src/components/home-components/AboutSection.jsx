import React from 'react'
import SectionHeading from '../generic-components/SectionHeading'
import ImageContainer from '../generic-components/ImageContainer'
import WorkingImage from '@images/template-working.jpg'
import { NavLink } from 'react-router-dom'
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons'

const AboutSection = () => {
  return (
    <section className='home-about-section bg-dark'>

        <div className='container'>

            <div className="text-container">
                <SectionHeading subtitle={"ABOUT ME"} heading={"A pedantic developer with a burning drive"} />
                <p className='about-text'>Nam pretium ipsum iaculis, tincidunt arcu et, sagittis orci. Quisque nec nibh id velit gravida facilisis. Sed vel venenatis justo, ultricies imperdiet nisi. Aenean bibendum leo leo, eu bibendum lorem mattis vel. Vestibulum feugiat, neque quis accumsan blandit, nulla odio ornare elit, sed dictum est quam a tellus.</p>
            </div>

            <NavLink className="image-link">
                <ImageContainer imgSrc={WorkingImage} imgAlt={"Person working on a laptop"} imgText={"ABOUT ME"} textIcon={faSquareArrowUpRight} />
            </NavLink>
        </div>

    </section>
  )
}

export default AboutSection