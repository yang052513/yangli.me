import React from 'react'
import { AboutImage } from './AboutImage'
import { AboutContent } from './AboutContent'

export const AboutSection: React.FC = () => {
  return (
    <div id="about-section-wrap" data-aos="fade-up">
      <AboutImage />
      <AboutContent />
    </div>
  )
}
