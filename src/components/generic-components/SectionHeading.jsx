import React from 'react'

const SectionHeading = ({subtitle, heading}) => {
  return (
    <div className="section-heading">
        <span className="subtitle">{subtitle}</span>
        <h2 className="heading">{heading}</h2>
    </div>
  )
}

export default SectionHeading