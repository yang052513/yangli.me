import React from 'react'
import IntroProfile from './introduction/IntroProfile'
import IntroContent from './introduction/IntroContent'
import '../css/Introduction.css'

function Introduction() {
    return(
        <div id="intro-section">
            <IntroContent />
            <IntroProfile />
        </div>
    )
}

export default Introduction