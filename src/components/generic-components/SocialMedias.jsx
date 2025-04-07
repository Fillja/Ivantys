import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const iconMap = {
  linkedin: faLinkedin,
  github: faGithub,
  email: faEnvelope,
  phone: faPhone,
}

const linkMap = {
  linkedin: 'https://www.linkedin.com/in/robin-gombk%C3%B6t%C3%B6/',
  github: 'https://github.com/fillja',
  email: 'mailto:robin.gombkoto@gmail.com',
  phone: 'tel:+46760373111',
}

const SocialMedias = ({classProperty, socials=[], id }) => {
  return (
    <div className={`social-container ${classProperty ? classProperty : ""} `}>

      {socials.map((social, index) => {
        const icon = iconMap[social]
        const href = linkMap[social]

        if(!icon || !href)
          return null

        return(
          <a key={index} href={href} className="social-link" target='_blank'>
            <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
          </a>
        )
      })}

    </div>
  )
}

export default SocialMedias