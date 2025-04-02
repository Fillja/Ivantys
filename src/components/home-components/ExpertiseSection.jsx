import { faPenRuler, faDisplay, faDatabase, faServer, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import ServiceCard from '../generic-components/ServiceCard'

const ExpertiseSection = () => {
  return (
    <section className="home-expertise-section bg-dark">

        <div className="container">

            <ServiceCard url={"/services"} heading={"Websites"} icon={faDisplay} text={"Learn more"} textIcon={faArrowRight}/>
            <ServiceCard url={"/services"} heading={"Systems"} icon={faPenRuler} text={"Learn more"} textIcon={faArrowRight}/>
            <ServiceCard url={"/services"} heading={"Databases"} icon={faDatabase} text={"Learn more"} textIcon={faArrowRight}/>
            <ServiceCard url={"/services"} heading={"Hosting"} icon={faServer} text={"Learn more"} textIcon={faArrowRight}/>

        </div>

    </section>
  )
}

export default ExpertiseSection