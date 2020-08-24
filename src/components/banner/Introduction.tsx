import React from 'react'
import { IntroProfile } from './IntroProfile'
import { IntroContent } from './IntroContent'
import '../css/Introduction.css'

export const Introduction: React.FC = () => {
  return (
    <div id="intro-section">
      <IntroContent />
      <IntroProfile />
    </div>
  )
}
