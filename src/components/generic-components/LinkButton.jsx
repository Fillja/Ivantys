import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const LinkButton = ({color, url, text, icon}) => {
  return (
    <NavLink className={`btn btn-${color}`} to={url}>{text}<FontAwesomeIcon icon={icon}/></NavLink>
  )
}

export default LinkButton