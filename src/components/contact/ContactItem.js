import React from 'react'

function ContactItem(props) {
    return(
        <div className="contact-section-block">
            <img src={props.imgUrl}/>
            <h4>{props.title}</h4>
            <p>{props.location}</p>
        </div>
    )
}

export default ContactItem