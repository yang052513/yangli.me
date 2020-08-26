import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
`

const StyledOverlay = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`

interface Props {
  source: string
  closeVideo: () => void
}

export const PortfolioVideoPlayer: React.FC<Props> = ({
  source,
  closeVideo,
}) => {
  return (
    <StyledContainer>
      <StyledOverlay onClick={closeVideo}></StyledOverlay>
      <video
        className="video-player"
        width="70%"
        controls
        style={{ zIndex: 2 }}
      >
        <source
          src={require(`../../assets/videos/${source}.mp4`)}
          type="video/mp4"
        />
      </video>
    </StyledContainer>
  )
}
