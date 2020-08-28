import React from 'react'
import { BannerProfileContact } from './BannerProfileContact'
import { Icon } from 'react-animated-fa'
import styled from 'styled-components'

const StyledContainer = styled.div`
  @media (max-width: 768px) {
    text-align: center;
  }
`

const StyledTitle = styled.h2`
  font-size: 65px;
  font-weight: bold;
  color: rgb(70, 70, 70);
`

const StyledSubTitle = styled.h4`
  font-size: 22px;
  color: rgb(70, 70, 70);
  margin-top: 10px;
`

const StyledWelcome = styled.p`
  background-color: #3da3f4;
  color: white;
  width: 140px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px 35px 35px 0px;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    margin: 20px auto 30px auto;
  }
`

const StyledSocial = styled.div`
  transform: translateX(-31px);

  @media (max-width: 450px) {
    position: absolute;
    bottom: -10px;
  }
`

export const BannerProfile: React.FC = () => {
  return (
    <StyledContainer>
      <StyledWelcome>Hey there, I'm</StyledWelcome>
      <StyledTitle>YANG LI</StyledTitle>
      <StyledSubTitle>Web Developer</StyledSubTitle>
      <BannerProfileContact />

      <StyledSocial>
        <Icon
          iconUrl="fab fa-instagram"
          link="https://www.facebook.com/"
          margin={0}
          layerColor="#03a9f4"
        />
        <Icon
          iconUrl="fab fa-github"
          link="https://www.facebook.com/"
          margin={0}
          layerColor="#03a9f4"
        />
        <Icon
          iconUrl="fab fa-linkedin-in"
          link="https://www.facebook.com/"
          margin={0}
          layerColor="#03a9f4"
        />
        <Icon
          iconUrl="fab fa-facebook-messenger"
          link="fas fa-rss"
          margin={0}
          layerColor="#03a9f4"
        />
      </StyledSocial>
    </StyledContainer>
  )
}
