import React from 'react';
import TimeLine from './experience/TimeLine'
import '../css/Experience.css'

function Experience() {
    return(
        <div id="experience-section" className="module-layout">
            <h3 className="section-title">EXPERIENCES</h3>
            <TimeLine />
        </div>
    )
}

export default Experience