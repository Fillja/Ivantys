import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

const ServiceCard = ({url, heading, icon, text, textIcon}) => {
  return (
    <NavLink to={url} className="service-card">
        <FontAwesomeIcon icon={icon} className="service-icon"/>
        <h4>{heading}</h4>
        <p>{text}<FontAwesomeIcon icon={textIcon} className="link-arrow"/></p>
    </NavLink> 
  )
}

export default ServiceCard