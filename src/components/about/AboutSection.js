import React from 'react'
import AboutImage from './AboutImage'
import AboutContent from './AboutContent'


function AboutSection() {
    return(
        <div id="about-section-wrap"  data-aos="fade-up">
            <AboutImage />
            <AboutContent />

        </div>
    )
}

export default AboutSection