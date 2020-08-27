import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`
const StyledTitle = styled.h3`
  text-align: center;
  font-size: 15px;
  color: rgb(70, 70, 70);
`
const StyledDesc = styled.p``
const StyledImage = styled.img`
  width: 500px;
  height: 300px;
  object-fit: cover;
  @media (max-width: 768px) {
    width: 100%;
  }
`
const StyledLink = styled.button``

interface Props {
  title: string
  desc: string
  image: string
  link: string
}

export const PortfolioNPMCard: React.FC<Props> = ({
  title,
  desc,
  image,
  link,
}) => {
  return (
    <StyledCard>
      <StyledImage
        src={require(`../../assets/images/npm/${image}`)}
        alt=""
      ></StyledImage>
      {/* <StyledTitle>{title}</StyledTitle> */}
      {/* <StyledDesc>{desc}</StyledDesc> */}
      {/* <StyledLink>Link</StyledLink> */}
    </StyledCard>
  )
}
