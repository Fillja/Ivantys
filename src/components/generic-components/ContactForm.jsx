import React, {useState} from 'react'

const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    
    const test = (e) => {
        setFormData({
            formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () =>{
        e.preventDefault();
        console.log("handleSubmit");
    }
    
  return (
    <form className='contact-form' method="post" onSubmit={handleSubmit} noValidate>

        <div className='name-container'>
            <label htmlFor='form-name' className={""}></label>
            <input 
            id='form-name' 
            type='text' 
            name='name' 
            placeholder='Your name'
            value={formData.name}
            onChange={handleChange}
            />
        </div>

        <div className='email-container'>
            <label htmlFor='form-email' className={""}></label>
            <input 
            id='form-email' 
            type='email' 
            name='email' 
            placeholder='Your email'
            value={formData.email}
            onChange={handleChange}
            />
        </div>

        <div className='phone-container'>
            <label htmlFor='form-phone' className={""}></label>
            <input 
            id='form-phone' 
            type='tel' 
            name='phone' 
            placeholder='Your phone number'
            value={formData.phone}
            onChange={handleChange}
            />
        </div>

        <div className='subject-container'>
            <label htmlFor='form-subject' className={""}></label>
            <input 
            id='form-subject' 
            type='text' 
            name='subject' 
            placeholder='Subject'
            value={formData.subject}
            onChange={handleChange}
            />
        </div>

        <div className='message-container'>
            <label htmlFor="form-message" className={""}></label>
            <textarea 
            id="form-message" 
            type="text" 
            name="message" 
            placeholder="Your Message" 
            value={formData.message} 
            onChange={handleChange}
            />
        </div>

        <div className='button-container'>
            <button className='btn btn-theme' type='submit'>Send message</button>
        </div>

    </form>
  )
}

export default ContactForm