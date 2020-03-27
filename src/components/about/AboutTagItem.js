import React from 'react'

function AboutTagItem(props) {
    return(
        <button className="about-section-tag">
            <i className={props.tagItem.icon}></i>{props.tagItem.text}
        </button>
    )
}

export default AboutTagItem