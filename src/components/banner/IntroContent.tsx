import React from 'react'
import { IntroContact } from './IntroContact'
import { SocialMedia } from './SocialMedia'

export const IntroContent: React.FC = () => {
  return (
    <div className="intro-section-content">
      <p id="intro-hey">Hey there, I'm</p>
      <h2>YANG LI</h2>
      <h4>
        <span id="highlight">Web Developer</span>
      </h4>
      <IntroContact />
      <SocialMedia />
    </div>
  )
}
