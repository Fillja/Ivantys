import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ImageContainer = ({imgSrc, imgAlt, imgText, textIcon}) => {
  return (
    <div className='image-container'>
        <img className="image" src={imgSrc} alt={imgAlt} />
        <span className="image-text">{imgText}<FontAwesomeIcon icon={textIcon}/></span>
    </div>
  )
}

export default ImageContainer