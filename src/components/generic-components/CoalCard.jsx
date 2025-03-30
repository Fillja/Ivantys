import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const CoalCard = ({icon, heading, text}) => {
  return (
    <div className='coal-card'>
        <div className='icon-heading'>
            <FontAwesomeIcon icon={icon} />
            <h5>{heading}</h5>
        </div>
        <p>{text}</p>
    </div>
  )
}

export default CoalCard