import React from 'react'

interface Props {
  imgUrl: any
  title: any
  location: any
}

export const ContactItem: React.FC<Props> = ({ imgUrl, title, location }) => {
  return (
    <div className="contact-section-block">
      <img src={imgUrl} />
      <h4>{title}</h4>
      <p>{location}</p>
    </div>
  )
}
