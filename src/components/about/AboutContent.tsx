import React from 'react'
import { AboutTag } from './AboutTag'
import { AboutResume } from './AboutResume'

export const AboutContent: React.FC = () => {
  return (
    <div id="about-section-content">
      <p className="section-content">
        I'm currently Term 2 Computer Systems Technology student at BCIT. I also
        graduated from Simon Fraser University with Bachelor of Economics
        degree. I'm good at Java, HTML5, CSS, JavaScript, jQuery, React,
        MongoDB. I have passion for Web design and IOS development. I am also a
        huge fan of Japanese animation and maga, and I like to collect anime
        character figures.
      </p>
      <AboutTag />
      <AboutResume />
    </div>
  )
}
