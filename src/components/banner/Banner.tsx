import React from 'react'
import { BannerAvatar } from './BannerAvatar'
import { BannerProfile } from './BannerProfile'
import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: 'wrap';
  margin-top: 150px;
  margin-bottom: 100px;
  justify-content: space-around;
  /* border: 1px solid red; */

  @media (max-width: 768px) {
    display: grid;
    grid-template-rows: 1fr 1fr;
    margin-top: 50px;
    justify-items: center;
  }
`

export const Banner: React.FC = () => {
  return (
    <StyledContainer>
      <BannerProfile />
      <BannerAvatar />
    </StyledContainer>
  )
}
