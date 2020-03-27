import React from 'react'
import IntroContactItem from './IntroContactItem'

function IntroContact() {
    return(
        <div className="intro-contact-wrap">
            <IntroContactItem icon="fas fa-envelope-open" text="liyang0525.ly@gmail.com"/>
            <IntroContactItem icon="fas fa-mobile-alt" text="+1 604-781-0561"/>
            <IntroContactItem icon="fas fa-map-marker-alt" text="3700, Willingdon Ave, Burnaby, Canada" />
        </div>
    )
}

export default IntroContact