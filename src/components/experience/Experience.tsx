import React from 'react'
import { TimeLine } from './TimeLine'
import '../css/Experience.css'

export const Experience: React.FC = () => {
  return (
    <div id="experience-section" className="module-layout">
      <h3 className="section-title" data-aos="fade-up">
        EXPERIENCES
      </h3>
      <TimeLine />
    </div>
  )
}
