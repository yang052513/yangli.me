import React, { useState } from 'react'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'

const StyledCard = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  position: relative;
`
const StyledDetails = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #03a9f4;
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`
const StyledTitle = styled.h3`
  text-align: center;
  font-size: 15px;
  padding: 10px 25px;
`
const StyledDesc = styled.p`
  padding: 10px 25px;
  text-align: center;
  font-size: 14px;
`
const StyledImage = styled.img`
  width: 500px;
  height: 300px;
  object-fit: cover;
  @media (max-width: 768px) {
    width: 100%;
  }
`
const StyledLink = styled.button`
  border: 1px solid #fff;
  color: #03a9f4;
  width: auto;
  font-size: 13px;
  padding: 5px 20px;
  border-radius: 25px;
  margin: 15px 10px 15px 0;
  background-color: #fff;
  transition: all 0.5s;
  &:hover {
    color: white;
    background-color: #03a9f4;
  }
  &:focus {
    outline: none;
  }
`

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
  const [show, setShow] = useState<boolean>(false)

  return (
    <StyledCard
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      data-aos="fade-up"
    >
      <StyledImage
        src={require(`../../assets/images/npm/${image}`)}
        alt=""
      ></StyledImage>

      <CSSTransition in={show} timeout={500} classNames="fade" unmountOnExit>
        <StyledDetails>
          <div>
            <StyledTitle>{title}</StyledTitle>
            <StyledDesc>{desc}</StyledDesc>
            <div style={{ textAlign: 'center' }}>
              <a href={link}>
                <StyledLink>Link</StyledLink>
              </a>
            </div>
          </div>
        </StyledDetails>
      </CSSTransition>
    </StyledCard>
  )
}
