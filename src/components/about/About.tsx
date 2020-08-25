import React from 'react'
import { AboutImage, AboutContent } from './index'
import styled from 'styled-components'
import { StyledSectionTitle } from '../../styles/shared'

const StyledContainer = styled.div`
  margin: 0 50px;
  /* padding: 50px 0; */
  /* border: 1px solid red; */
`

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const About: React.FC = () => {
  return (
    <StyledContainer>
      <StyledSectionTitle>About Me</StyledSectionTitle>
      <StyledWrapper>
        <AboutImage />
        <AboutContent />
      </StyledWrapper>
    </StyledContainer>
  )
}
