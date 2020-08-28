import React from 'react'
import { PortfolioCard } from './PortfolioCard'
import portfolioData from '../../data/portfolio.json'
import styled from 'styled-components'

const StyledCardContainer = styled.div`
  display: grid;
  justify-items: center;
`

export const PortfolioWeb: React.FC = () => {
  const portfolioList = portfolioData.map((project, index) => (
    <PortfolioCard
      key={project.title}
      isEven={index % 2 === 0 ? true : false}
      banner={project.banner}
      title={project.title}
      desc={project.desc}
      tools={project.tags}
      link={project.demo}
      linkText={project.github}
      linkIcon={'fab fa-github'}
    />
  ))
  return <StyledCardContainer>{portfolioList}</StyledCardContainer>
}
