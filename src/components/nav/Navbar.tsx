import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  text-align: center;
  margin: 20px 0;
  @media (max-width: 768px) {
    display: none;
  }
`

const StyledLink = styled.a`
  font-weight: bold;
  font-size: 18px;
  text-decoration: none;
  color: rgb(0, 0, 0);
  padding: 20px 0px;
  margin: 0px 20px;
  display: inline-block;
  position: relative;
  opacity: 0.75;
  transition: opacity 0.5s, color 0.5s;
  cursor: pointer;
  &:hover {
    opacity: 1;
    color: #03a9f4;
  }
  &:before {
    transition: 300ms;
    height: 2px;
    content: '';
    position: absolute;
    background-color: #3da3f4;
    width: 0%;
    bottom: 10px;
  }
  &:hover:before {
    width: 100%;
  }
`

export const Navbar: React.FC = () => {
  return (
    <StyledContainer>
      <StyledLink href="#about">ABOUT</StyledLink>
      <StyledLink href="#skill">SKILLS</StyledLink>
      <StyledLink href="#experience">EXPERIENCE</StyledLink>
      <StyledLink href="#portfolio">PORTFOLIO</StyledLink>
      <StyledLink href="#blogs">BLOGS</StyledLink>
    </StyledContainer>
  )
}
