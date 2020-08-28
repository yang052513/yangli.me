import React, { useState } from 'react'
import styled from 'styled-components'
import * as S from '../../styles/shared'
import { PortfolioWeb } from './PortfolioWeb'
import { PortfolioNPM } from './PortfolioNPM'
import { PortfolioUI } from './PortfolioUI'
import { PortfolioVideo } from './PortfolioVideo'

const StyledSelectContainer = styled.div`
  width: fit-content;
  margin: 0 auto 20px auto;
`
const StyledButton = styled.button`
  border: 1px solid #03a9f4;
  color: #03a9f4;
  width: auto;
  font-size: 16px;
  padding: 5px 20px;
  border-radius: 25px;
  margin: 15px 20px 15px 0;
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

export const Portfolio: React.FC = () => {
  const [panel, setPanel] = useState<string>('web')

  const handleSwitch = (tab: string) => {
    setPanel(tab)
  }

  return (
    <S.StyledContainer>
      <S.StyledSectionTitle data-aos="fade-up">Portfolio</S.StyledSectionTitle>
      <S.StyledSectionSubtitle data-aos="fade-up">
        I learned the most when I actually started doing it.
      </S.StyledSectionSubtitle>

      <StyledSelectContainer data-aos="fade-up">
        <StyledButton onClick={() => handleSwitch('web')}>
          Wep and Mobile Apps
        </StyledButton>
        {/* <StyledButton onClick={() => handleSwitch('ui')}>
          UI/UX Design
        </StyledButton> */}
        <StyledButton onClick={() => handleSwitch('npm')}>
          NPM Packages
        </StyledButton>
        <StyledButton onClick={() => handleSwitch('video')}>
          Video Production
        </StyledButton>
      </StyledSelectContainer>

      {panel === 'web' ? (
        <PortfolioWeb />
      ) : panel === 'ui' ? (
        <PortfolioUI />
      ) : panel === 'npm' ? (
        <PortfolioNPM />
      ) : (
        <PortfolioVideo />
      )}
    </S.StyledContainer>
  )
}
