import React, { useState, useEffect } from 'react'
import logo from '@images/robin-logo-white.png'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered, faX } from '@fortawesome/free-solid-svg-icons'
import SocialMedias from './generic-components/SocialMedias'
import NavigationMenu from './generic-components/NavigationMenu'


const Header = () => {
  
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(prev => !prev)

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }, [menuOpen])

  return (
    <header className="bg-dark">

        <div className="container">

            <div className="logo-container">
                <NavLink className="logo-link" to="/"><img className="logo" src={logo} alt="Site logo" /></NavLink>
            </div>
            
            <NavigationMenu classProperty={"tablet-hidden"} />
            
            <SocialMedias socials={["linkedin", "github", "email", "phone"]} classProperty={"tablet-hidden"} />

            <div className="mobile-menu-container desktop-hidden">

              <button className="menu-button burger-button" onClick={toggleMenu}><FontAwesomeIcon icon={faBarsStaggered}></FontAwesomeIcon></button>
              
              <div className={`mobile-menu ${menuOpen ? '' : 'hidden'}`}>

                <div className="burger-top">
                  <button className="menu-button cross-button" onClick={toggleMenu}><FontAwesomeIcon icon={faX}></FontAwesomeIcon></button>
                  <NavigationMenu />
                </div>

                <SocialMedias classProperty={"burger-bottom"} socials={["linkedin", "github", "email", "phone"]} />

              </div>

            </div>

        </div>

    </header>
  )
}

export default Header