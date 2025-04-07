import React from 'react'
import SocialMedias from './generic-components/SocialMedias'
import { NavLink } from 'react-router-dom'
import logo from '@images/robin-logo-white.png'
import NavigationMenu from './generic-components/NavigationMenu'
import ContactLink from './generic-components/ContactLink'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons' 

const Footer = () => {
  return (
    <footer className='bg-coal'>
        
        <div className="container">

            <div className='footer-content-wrapper'>
                <div className="logo-container">
                    <NavLink className="logo-link" to="/"><img className="logo" src={logo} alt="Site logo" /></NavLink>
                </div>
                <p className='brand-text'>The personal portfolio category includes websites or physical displays</p>
                <SocialMedias socials={["linkedin", "github"]} classProperty={"tablet-hidden"} />
            </div>

            <div className="footer-content-wrapper">
                <h5>Contact</h5>
                <ContactLink icon={faEnvelope} link={"mailto:robin.gombkoto@gmail.com"} text={"robin.gombkoto@gmail.com"}/>
                <ContactLink icon={faPhone} link={"tel:+46760373111"} text={"0760 37 31 11"}/>
            </div>


            <div className="footer-content-wrapper">
                <h5>Quick links</h5>
                <NavigationMenu />
            </div>

        </div>
    
    </footer>
  )
}

export default Footer