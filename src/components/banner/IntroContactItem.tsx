import React from 'react'

interface Props {
  icon: any
  text: any
}

export const IntroContactItem: React.FC<Props> = ({ icon, text }) => {
  return (
    <div className="intro-contact-block">
      <i className={icon}></i>
      <p>{text}</p>
    </div>
  )
}
