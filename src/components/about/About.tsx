import React from 'react'
import { AboutImage, AboutContent } from './index'
import styled from 'styled-components'
import * as S from '../../styles/shared'

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const About: React.FC = () => {
  return (
    <S.StyledContainer data-aos="fade-up">
      <S.StyledSectionTitle id="about"> About Me</S.StyledSectionTitle>
      <S.StyledSectionSubtitle>
        Love Coding, Always Learning, Competitive Powerlifter, Animation for
        Life.
      </S.StyledSectionSubtitle>
      <StyledWrapper>
        <AboutImage />
        <AboutContent />
      </StyledWrapper>
    </S.StyledContainer>
  )
}
