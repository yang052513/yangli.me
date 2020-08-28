import React from 'react'
import styled from 'styled-components'

interface Props {
  title: any
  position: any
  duty: any
  time: any
}

const StyledContent = styled.div`
  padding: 20px;
  position: relative;
  background: #ecf7fd;
  border-radius: 0.4em;
  &:after {
    content: '';
    position: absolute;
    right: 0;
    top: 15%;
    width: 0;
    height: 0;
    border: 16px solid transparent;
    border-left-color: #ecf7fd;
    border-right: 0;
    border-top: 0;
    margin-top: -8px;
    margin-right: -16px;
  }
`

const StyledTitle = styled.h3`
  padding: 0;
  margin: 0;
  color: rgb(21, 21, 21);
  font-weight: bold;
  font-size: 18px;
`

const StyledPosition = styled.p`
  margin: 10px 0 0;
  padding: 0;
  color: rgb(29, 29, 29);
  font-size: 15px;
`

const StyledDuty = styled.p`
  margin: 10px 0 0;
  padding: 0;
  color: rgb(99, 98, 98);
  font-size: 13px;
  line-height: 1.3rem;
`
const StyledTime = styled.h4`
  margin: 0;
  padding: 0;
  font-size: 13px;
  color: rgb(21, 21, 21);
`

const StyledTimeContainer = styled.div``

export const ExperienceTimeLineItem: React.FC<Props> = ({
  title,
  position,
  duty,
  time,
}) => {
  return (
    <div data-aos="fade-up">
      <StyledContent>
        <StyledTitle>{title}</StyledTitle>
        <StyledPosition>{position}</StyledPosition>
        <StyledDuty>{duty}</StyledDuty>
      </StyledContent>

      <StyledTimeContainer className="time">
        <StyledTime>{time}</StyledTime>
      </StyledTimeContainer>
    </div>
  )
}
