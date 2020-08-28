import React, { useState } from 'react'
import styled from 'styled-components'
import videoData from '../../data/video.json'
import { PortfolioCard } from './PortfolioCard'
import { PortfolioVideoPlayer } from './PortfolioVideoPlayer'
import { CSSTransition } from 'react-transition-group'

const StyledCardContainer = styled.div`
  display: grid;
  justify-items: center;
`

export const PortfolioVideo: React.FC = () => {
  const [video, setVideo] = useState<{ play: boolean; src: string }>({
    play: false,
    src: '',
  })

  const playVideo = (videoUrl: string) => {
    setVideo({
      play: true,
      src: videoUrl,
    })
  }

  const closeVideo = () => {
    setVideo({
      ...video,
      play: false,
    })
    console.log('关闭')
  }

  const videoList = videoData.map((video, index) => (
    <PortfolioCard
      isVideo={true}
      isEven={index % 2 == 0 ? true : false}
      id={video.id}
      playVideo={playVideo}
      banner={`${video.id}.png`}
      title={video.title}
      desc={video.desc}
      tools={video.tags}
      link={video.demo}
      linkText={'Bilibili'}
      linkIcon={'fab fa-youtube'}
    />
  ))

  return (
    <StyledCardContainer>
      {videoList}

      <CSSTransition
        in={video.play}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        <PortfolioVideoPlayer source={video.src} closeVideo={closeVideo} />
      </CSSTransition>
    </StyledCardContainer>
  )
}
