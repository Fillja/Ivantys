import { faPenRuler, faDisplay, faCamera, faBezierCurve, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import ServiceItem from '../generic-components/ServiceItem'

const ExpertiseSection = () => {
  return (
    <section className="home-expertise-section bg-dark">

        <div className="container">

            <ServiceItem url={"/services"} heading={"Website"} icon={faDisplay} text={"Learn more"} textIcon={faArrowRight}/>
            <ServiceItem url={"/services"} heading={"UI/UX Design"} icon={faPenRuler} text={"Learn more"} textIcon={faArrowRight}/>
            <ServiceItem url={"/services"} heading={"Photography"} icon={faCamera} text={"Learn more"} textIcon={faArrowRight}/>
            <ServiceItem url={"/services"} heading={"Logos"} icon={faBezierCurve} text={"Learn more"} textIcon={faArrowRight}/>

        </div>

    </section>
  )
}

export default ExpertiseSection