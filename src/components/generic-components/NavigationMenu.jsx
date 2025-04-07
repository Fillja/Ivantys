import React from 'react'
import { NavLink } from 'react-router-dom'

const NavigationMenu = ({classProperty, id}) => {
  return (
    <nav className={`navigation-container ${classProperty ? classProperty : ""} `}>
      <NavLink to="/" className="link">Home</NavLink>
      <NavLink to="/services" className="link">Services</NavLink>
      <NavLink to="/services#projects" className="link">Projects</NavLink>
      <NavLink to="/about" className="link">About</NavLink>
      <NavLink to="/contact" className="link">Contact</NavLink>
    </nav>
  )
}

export default NavigationMenu