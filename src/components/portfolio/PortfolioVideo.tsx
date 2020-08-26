import React from 'react'
import styled from 'styled-components'
import videoData from '../../data/video.json'
import { PortfolioCard } from './PortfolioCard'

const StyledCardContainer = styled.div`
  display: grid;
  justify-items: center;
`

export const PortfolioVideo: React.FC = () => {
  const videoList = videoData.map((video, index) => (
    <PortfolioCard
      isEven={index % 2 == 0 ? true : false}
      banner={`${video.id}.png`}
      title={video.title}
      desc={video.desc}
      tools={video.tags}
      link={video.demo}
      linkText={'Bilibili'}
      linkIcon={'fab fa-youtube'}
    />
  ))

  return <StyledCardContainer>{videoList}</StyledCardContainer>
}
