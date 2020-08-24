import React from 'react'

interface Props {
  url: any
  icon: any
}

export const SocialMediaItem: React.FC<Props> = ({ url, icon }) => {
  return (
    <a className="btn" href={url}>
      <i className={icon}></i>
    </a>
  )
}
export default SocialMediaItem
