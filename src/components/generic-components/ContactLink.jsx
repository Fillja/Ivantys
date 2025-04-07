import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'

const ContactLink = ({icon, text, link}) => {
  return (
    <div className='contact-link'>
      <FontAwesomeIcon icon={icon} className='contact-icon' />
      <NavLink to={link} className="link">{text}</NavLink>
    </div>
  )
}

export default ContactLink