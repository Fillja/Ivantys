import React from 'react'
import logo from '@images/ivantys-logo-white.png'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone, faBarsStaggered } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <header class="bg-dark">

        <div className="container">

            <div className="logo-container">
                <img className="logo" src={logo} alt="Ivantys logo" />
            </div>
            
            <nav className="navigation-container tablet-hidden">
              <NavLink to="/" className="link">Home</NavLink>
              <NavLink to="/services" className="link">Services</NavLink>
              <NavLink to="/services#projects" className="link">Projects</NavLink>
              <NavLink to="/about" className="link">About</NavLink>
              <NavLink to="/contact" className="link">Contact</NavLink>
            </nav>

            <div className="social-container tablet-hidden">
              <a href="https://www.linkedin.com/in/robin-gombk%C3%B6t%C3%B6/" className="social-link">
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
              </a>
              <a href="https://github.com/fillja" className="social-link">
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
              </a>
              <a href="mailto:robin.gombkoto@gmail.com" className="social-link">
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              </a>
              <a href="tel:+46760373111" className="social-link">
                <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
              </a>
            </div>

            <div className="mobile-menu-container desktop-hidden">
              <button className="burger-button"><FontAwesomeIcon icon={faBarsStaggered}></FontAwesomeIcon></button>
            </div>

        </div>

    </header>
  )
}

export default Header