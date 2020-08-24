import React from 'react'

interface Props {
  title: any
  position: any
  duty: any
  time: any
}
export const TimeLineItem: React.FC<Props> = ({
  title,
  position,
  duty,
  time,
}) => {
  return (
    <div>
      <div className="content content-left">
        <h3>{title}</h3>
        <p className="content-job">{position}</p>
        <p className="content-details">{duty}</p>
      </div>
      <div className="time">
        <h4>{time}</h4>
      </div>
    </div>
  )
}
