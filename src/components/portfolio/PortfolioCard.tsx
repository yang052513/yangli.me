import React, { useState } from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
  display: flex;
  width: 70%;
  flex-wrap: wrap;
  margin-bottom: 20px;
  @media (max-width: 800px) {
    width: 100%;
  }
`
const StyledImageContainer = styled.div`
  flex: 1 1 400px;
  position: relative;
`
const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 800px) {
    width: 100%;
  }
`
const StyledOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`

const StyledPlyBtn = styled.i`
  color: white;
  font-size: 80px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const StyledInfoWrapper = styled.div`
  flex: 1 1 200px;
  padding: 25px;
  background-color: #ecf7fd;
`

const StyledTitle = styled.h3`
  font-size: 20px;
`

const StyledDesc = styled.p`
  color: rgb(70, 70, 70);
  margin: 20px 0;
  font-size: 14px;
  line-height: 1.5rem;
`

const StyledToolsWrapper = styled.div`
  ul {
    list-style-type: none;
  }
`

const StyledTools = styled.li`
  display: inline-block;
  margin: 0 10px 10px 0;
  color: #a7a7a7;
  font-size: 14px;
`

const StyledGithub = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  i {
    font-size: 20px;
    margin-right: 10px;
  }
  a {
    color: rgb(70, 70, 70);
    text-decoration: none;
  }
`

const StyledDemoBtn = styled.button`
  border: 1px solid #03a9f4;
  color: #03a9f4;
  width: auto;
  font-size: 13px;
  padding: 5px 20px;
  border-radius: 25px;
  margin: 15px 10px 15px 0;
  background-color: rgba(0, 0, 0, 0);
  transition: all 0.5s;
  &:hover {
    color: white;
    background-color: #03a9f4;
  }
  &:focus {
    outline: none;
  }
`

interface Props {
  video?: {
    play: boolean
    src: string
  }
  playVideo?: any
  isVideo?: boolean
  isEven: boolean
  id?: any
  banner: string
  title: string
  desc: string
  tools: Array<string>
  link: string
  linkIcon: string
  linkText: string
}

export const PortfolioCard: React.FC<Props> = ({
  video,
  playVideo,
  isVideo,
  isEven,
  id,
  banner,
  title,
  desc,
  tools,
  link,
  linkIcon,
  linkText,
}) => {
  const [showPlyBtn, setShowPlyBtn] = useState<boolean>(false)

  return (
    <StyledCard>
      {isEven && (
        <StyledImageContainer
          onMouseEnter={() => setShowPlyBtn(true)}
          onMouseLeave={() => setShowPlyBtn(false)}
        >
          <StyledImage
            src={require(`../../assets/images/portfolio/${banner}`)}
            alt=""
          ></StyledImage>
          {showPlyBtn && isVideo ? (
            <div>
              <StyledOverlay></StyledOverlay>
              <StyledPlyBtn
                className="fab fa-youtube"
                onClick={() => playVideo(id)}
              ></StyledPlyBtn>
            </div>
          ) : null}
        </StyledImageContainer>
      )}

      <StyledInfoWrapper>
        <StyledTitle>{title}</StyledTitle>
        <StyledDesc>{desc}</StyledDesc>
        <StyledToolsWrapper>
          <ul>
            {tools.map((tool: any) => (
              <StyledTools>{tool}</StyledTools>
            ))}
          </ul>
        </StyledToolsWrapper>

        <StyledGithub>
          <i className={linkIcon}></i>
          <a href={link}>{linkText}</a>
        </StyledGithub>
        <StyledDemoBtn>Live Demo</StyledDemoBtn>
      </StyledInfoWrapper>
      {!isEven && (
        <StyledImageContainer
          onMouseEnter={() => setShowPlyBtn(true)}
          onMouseLeave={() => setShowPlyBtn(false)}
        >
          <StyledImage
            src={require(`../../assets/images/portfolio/${banner}`)}
            alt=""
          ></StyledImage>
          {showPlyBtn && isVideo ? (
            <div>
              <StyledOverlay></StyledOverlay>
              <StyledPlyBtn
                className="fab fa-youtube"
                onClick={() => playVideo(id)}
              ></StyledPlyBtn>
            </div>
          ) : null}
        </StyledImageContainer>
      )}
    </StyledCard>
  )
}
