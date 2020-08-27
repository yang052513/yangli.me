import React from 'react'
import styled from 'styled-components'
import npmData from '../../data/npm.json'
import { PortfolioNPMCard } from './PortfolioNPMCard'

const StyledCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 500px);
  grid-gap: 25px;
  justify-content: center;
  row-gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, 400px);
  }
`

const npmList = npmData.map(npm => (
  <PortfolioNPMCard
    title={npm.title}
    desc={npm.desc}
    image={npm.preview}
    link={npm.link}
  />
))
export const PortfolioNPM: React.FC = () => {
  return <StyledCardContainer>{npmList}</StyledCardContainer>
}
