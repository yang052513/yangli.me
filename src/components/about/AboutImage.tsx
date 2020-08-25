import React from 'react'
import styled from 'styled-components'
import about from '../../assets/images/about.png'

const StyledImage = styled.img`
  height: 400px;
  object-fit: cover;
  margin-right: 100px;
  margin-bottom: 20px;
  border-radius: 25px;
  flex: 0 1 400px;
  @media (max-width: 1300px) {
    margin-right: 0;
  }
`

export const AboutImage: React.FC = () => {
  return <StyledImage src={about} alt=""></StyledImage>
}
