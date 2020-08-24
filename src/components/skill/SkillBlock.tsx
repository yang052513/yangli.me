import React from 'react'

interface Props {
  imgUrl: any
  title: any
  content: any
}

export const SkillBlock: React.FC<Props> = ({ imgUrl, title, content }) => {
  return (
    <div className="skill-section-block">
      <img src={imgUrl} />
      <h4 className="skill-section-block-title">{title}</h4>
      <p className="skill-section-block-content">{content}</p>
    </div>
  )
}
export default SkillBlock
