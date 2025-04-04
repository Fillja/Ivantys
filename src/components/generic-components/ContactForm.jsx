import { send } from '@emailjs/browser';
import React, {useState} from 'react'

const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [emailError, setEmailError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [textError, setTextError] = useState(false);
    const [messageError, setMessageError] = useState(false);
    const [successMessage, setSuccessMessage] = useState();
    const [errorMessage, setErrorMessage] = useState();

    const isFormValid = (
        !emailError &&
        !textError &&
        !messageError &&
        formData.name.trim() !== '' &&
        formData.email.trim() !== '' &&
        formData.message.trim() !== ''
      );

    const emailValidator = (email) => {
        const emailRegex = /^[^@]+@[a-zA-Z0-9]{2,}\.[a-zA-Z]{2,}$/;
        return !(emailRegex.test(email) || email === '');
    }

    const phoneValidator = (phone) => {
        const swedishPhoneRegex = /^(?:\+46|0)7\d{8}$/;
        return !(swedishPhoneRegex.test(phone) ||  phone === '');
    }

    const textValidator = (text) => {
        if (text.trim() === '') 
            return false; 
        return text.trim().length < 2; 
    };

    const messageValidator = (message) => {
        if (message.trim() === '') 
            return false; 
        return message.trim().length < 2; 
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

        switch(e.target.name){
            case "name": 
                setTextError(textValidator(e.target.value))
                break;

            case "message":
                setMessageError(messageValidator(e.target.value))
                break;
            
            case "email": 
                setEmailError(emailValidator(e.target.value))
                break;

            case "phone": 
                setPhoneError(phoneValidator(e.target.value))
                break;
        }
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        if(!isFormValid) return
        
        send(
            'service_3cr8ehp',
            'template_5y78fcg',
            {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                subject: formData.subject,
                message: formData.message
            },
            '0ClX09wu-Knwrr--s'
        )
        .then((result) => {
            setSuccessMessage("Email successfully sent!");
            console.log(result.text);
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
        }, (error) => {
            console.log(error.text);
            setErrorMessage("Failed to send email, please try again.");
        });
    };
    
  return (
    <form className='contact-form' method="post" onSubmit={handleSubmit} noValidate>

        <div className='input-container name-container'>
            <label htmlFor='form-name' className={textError ? "error" : ""}>{textError ? "Minimum two characters long." : <br/>}</label>
            <input 
            id='form-name' 
            type='text' 
            name='name' 
            placeholder='Your name'
            value={formData.name}
            onChange={handleChange}
            />
        </div>

        <div className='input-container email-container'>
            <label htmlFor='form-email' className={emailError ? "error" : ""}>{emailError ? "Email has to be valid." : <br/>}</label>
            <input 
            id='form-email' 
            type='email' 
            name='email' 
            placeholder='Your email'
            value={formData.email}
            onChange={handleChange}
            />
        </div>

        <div className='input-container phone-container'>
            <label htmlFor='form-phone' className={phoneError ? "error" : ""}>{phoneError ? "Provide a valid phone number." : <br/>}</label>
            <input 
            id='form-phone' 
            type='tel' 
            name='phone' 
            placeholder='Your phone number'
            value={formData.phone}
            onChange={handleChange}
            />
        </div>

        <div className='input-container subject-container'>
            <label htmlFor='form-subject'><br/></label>
            <input 
            id='form-subject' 
            type='text' 
            name='subject' 
            placeholder='Subject'
            value={formData.subject}
            onChange={handleChange}
            />
        </div>

        <div className='input-container message-container'>
            <label htmlFor="form-message"className={messageError ? "error" : ""}>{messageError ? "Message cannot be empty." : <br/>}</label>
            <textarea 
            id="form-message" 
            name="message" 
            placeholder="Your Message" 
            value={formData.message} 
            onChange={handleChange}
            />
        </div>

        <div className='button-container'>
            <button disabled={!isFormValid} className='btn btn-theme' type='submit'>Send message</button>
            <span>{successMessage}{errorMessage}</span>
        </div>

    </form>
  )
}

export default ContactForm