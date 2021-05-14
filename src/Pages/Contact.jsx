import React from 'react'
import '../Styles/Contact.scss'

const Contact = () =>  {

    return (
        <div className='contact'>
            <div className='contact-info-wrapper'>
                <h1>Contact</h1>

                <div className='contact-info'>
                    <h2>Email</h2>
                    <h4>example@example.com</h4>

                    <h2>Address</h2>
                    <h4>123 Demo Street</h4>
                    <h4>New York, NY 12345</h4>
                </div>
            </div>
        </div>
        )
}

export default Contact;
