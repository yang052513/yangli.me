import React from 'react'
import styled from 'styled-components'

const StyledCardContainer = styled.div`
  display: grid;
  justify-items: center;
`

export const PortfolioNPM: React.FC = () => {
  return (
    <StyledCardContainer>
      <p>NPM</p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsa
        atque adipisci repellat aliquam consectetur aut et, eos libero officiis
        error numquam quod aspernatur. Ex, vero quam culpa fugiat inventore
        adipisci? Quas quasi ipsam sit distinctio quia quod magni amet,
        laudantium iure quae dolores maiores cum facere excepturi placeat
        quaerat, vitae nobis alias. Repellendus, natus!
      </p>
    </StyledCardContainer>
  )
}
