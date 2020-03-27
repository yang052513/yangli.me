import React from 'react'
import AboutSection from './about/AboutSection'
import '../css/About.css'

function About() {
    return(
        <div id="about-section" className="module-layout">
            <h3 className="section-title">ABOUT ME</h3>
            <AboutSection />
        </div>
    )
}

export default About 