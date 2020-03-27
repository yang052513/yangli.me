import React from 'react'

function IntroContactItem(props) {
    return(
        <div className="intro-contact-block">
            <i className={props.icon}></i>
            <p>{props.text}</p>
        </div>  
    )
}

export default IntroContactItem