import React from 'react'
import { ExperienceTimeLineItem } from './ExperienceTimeLineItem'

import styled from 'styled-components'

const StyledTimeline = styled.div`
  position: relative;
  margin: 50px auto;
  padding: 40px 0;
  width: 1000px;
  box-sizing: border-box;
  &:before {
    content: '';
    position: absolute;
    left: 50%;
    width: 1px;
    height: 100%;
    background: #c5c5c5;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    padding-bottom: 0;
    &:before {
      left: 20px;
      height: 100%;
    }
  }
`

const StyledTimelineItem = styled.li`
  list-style: none;
  position: relative;
  width: 50%;
  padding: 20px 40px;
  box-sizing: border-box;
  margin-bottom: 20px;

  &:nth-child(odd) {
    float: left;
    text-align: right;
    clear: both;
  }
  &:nth-child(even) {
    float: right;
    text-align: left;
    clear: both;
  }
  &:nth-child(odd) .time {
    position: absolute;
    top: 12px;
    right: -265px;
    margin: 0;
    padding: 8px 16px;
    background: #bbe4f9;
    color: rgb(0, 0, 0);
    border-radius: 18px;
  }
  &:nth-child(even) .time {
    position: absolute;
    top: 12px;
    left: -265px;
    margin: 0;
    padding: 8px 16px;
    background: #bbe4f9;
    color: rgb(0, 0, 0);
    border-radius: 18px;
  }
  &:nth-child(odd):before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    top: 24px;
    right: -6px;
    background: #bbe4f9;
    border-radius: 50%;
  }
  &:nth-child(even):before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    top: 24px;
    left: -4px;
    background: #bbe4f9;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    &:nth-child(odd),
    &:nth-child(even) {
      width: 100%;
      text-align: left;
      padding-left: 50px;
      padding-bottom: 50px;
    }

    &:nth-child(odd):before,
    &:nth-child(even):before {
      top: -18px;
      left: 16px;
    }

    &:nth-child(odd) .time,
    &:nth-child(even) .time {
      top: -30px;
      left: 50px;
      right: inherit;
    }
  }
`

export const ExperienceTimeLine: React.FC = () => {
  return (
    <StyledTimeline data-aos="fade-up">
      <ul>
        <StyledTimelineItem>
          <ExperienceTimeLineItem
            title="British Columbia Institute of Technology"
            position="Computer System Technology Diploma"
            duty="Created multiple web porjects with peers by using html, css,
                            and javascript. Proficient programming with C and Java."
            time="September 2019 - April 2021"
          />
        </StyledTimelineItem>

        <StyledTimelineItem>
          <ExperienceTimeLineItem
            title="Victor Immigration Inc."
            position="Immigration Consult"
            duty="Help clients to renew their status in Canana by filling the form and
                            connect CIC for clients"
            time="December 2018 - July 2019"
          />
        </StyledTimelineItem>
        <StyledTimelineItem>
          <ExperienceTimeLineItem
            title="Simon Fraser University"
            position="Bachelor of Arts in Economics"
            duty="Achieved 3 times Dean's Honor Roll with excellent academic records.
                            Enhanced my critical thinking by taking advance Economics courses."
            time="September 2015 - August 2018"
          />
        </StyledTimelineItem>
        <StyledTimelineItem>
          <ExperienceTimeLineItem
            title="T&amp;T Supermarket"
            position="Grocery Assistant"
            duty="Provided excellent customer service by helping customers efficiently
                            in a timely and friendly manner,
                            and received good feedback from customer survey"
            time="September 2015 - August 2018"
          />
        </StyledTimelineItem>

        <div style={{ clear: 'both' }}></div>
      </ul>
    </StyledTimeline>
  )
}
