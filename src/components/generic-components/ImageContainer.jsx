import React from 'react'

const ImageContainer = ({imgSrc, imgAlt, imgSize}) => {
  return (
    <div className='image-container'>
        <img className="image" src={imgSrc} alt={imgAlt} />
    </div>
  )
}

export default ImageContainer