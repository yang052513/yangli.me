import React from 'react'
import ContactItem from './contact/ContactItem'
import '../css/Contact.css'

function Contact() {
    return (
        <div id="contact-showcase">
            <div id="contact-section" className="module-layout">
                <h3 id="contact-title" class="section-title">CONTACT</h3>
                <div id="contact-section-block-wrap">
                    <ContactItem 
                        imgUrl="resource/location-icon.png"
                        title="Address"
                        location="3700, Willingdon Ave, Burnaby, Canada"
                    />
                    <ContactItem 
                        imgUrl="resource/email-icon.png"
                        title="Email"
                        location="liyang0525.ly@gmail.com"
                    />
                     <ContactItem 
                        imgUrl="resource/phone-icon.png"
                        title="Phone"
                        location="+1 604-781-0561"
                    />
                </div>
            </div>
        </div>
    )
}

export default Contact