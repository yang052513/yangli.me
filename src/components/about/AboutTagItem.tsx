import React from 'react'

interface Props {
  tagItem: any
}

export const AboutTagItem: React.FC<Props> = ({ tagItem }) => {
  return (
    <button className="about-section-tag">
      <i className={tagItem.icon}></i>
      {tagItem.text}
    </button>
  )
}
