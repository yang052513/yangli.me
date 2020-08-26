import React from 'react'
import styled from 'styled-components'
import * as S from '../../styles/shared'
import { PortfolioCard } from './PortfolioCard'
import portfolioData from '../../data/portfolio.json'

const StyledCardContainer = styled.div`
  display: grid;
  justify-items: center;
`

const portfolioList = portfolioData.map((project, index) => (
  <PortfolioCard project={project} isEven={index % 2 == 0 ? true : false} />
))

export const Portfolio: React.FC = () => {
  return (
    <S.StyledContainer>
      <S.StyledSectionTitle>Portfolio</S.StyledSectionTitle>
      <StyledCardContainer>{portfolioList}</StyledCardContainer>
    </S.StyledContainer>
  )
}
