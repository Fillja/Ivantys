import React from 'react'
import SectionHeading from '../generic-components/SectionHeading'
import ContactLink from '../generic-components/ContactLink'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons' 
import ContactForm from '../generic-components/ContactForm'

const ContactSection = () => {
  return (
    <section className='home-contact-section bg-dark'>

        <div className="container bg-coal">

            <div className="text-container">
                <SectionHeading subtitle={"CONTACT ME"} heading={"Get in touch with me"} />
                <ContactLink icon={faEnvelope} link={"mailto:robin.gombkoto@gmail.com"} text={"robin.gombkoto@gmail.com"}/>
                <ContactLink icon={faPhone} link={"tel:+46760373111"} text={"0760 37 31 11"}/>
            </div>

            <ContactForm/>
            
        </div>

    </section>
  )
}

export default ContactSection