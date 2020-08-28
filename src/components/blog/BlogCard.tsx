import React from 'react'
import styled from 'styled-components'
import * as S from '../../styles/shared'

const StyledCard = styled.div`
  margin: 0 20px 20px 20px;
  flex: 0 1 400px;
  position: relative;
  height: 500px;
  background-color: #f8f8f8;
`
const StyledBanner = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`
const StyledTextWrapper = styled.div`
  padding: 10px;
`
const StyledDesc = styled.p`
  font-size: 13px;
  color: rgb(70, 70, 70);
  line-height: 1.5rem;
  margin-top: 10px;
  height: 100px;
`
const StyledButton = styled.button`
  border: 1px solid #03a9f4;
  color: #03a9f4;
  width: auto;
  font-size: 13px;
  padding: 5px 20px;
  border-radius: 25px;
  margin: 15px 10px 15px 0;
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
const StyledDate = styled.p`
  position: absolute;
  bottom: 10px;
  font-size: 13px;
  color: gray;
`

interface Props {
  blog: any
}

export const BlogCard: React.FC<Props> = ({ blog }) => {
  return (
    <StyledCard>
      <StyledBanner
        src={require(`../../assets/images/blog/${blog.banner}`)}
        alt=""
      ></StyledBanner>
      <StyledTextWrapper>
        <h3>{blog.title}</h3>
        <StyledDesc>{blog.desc}</StyledDesc>
        <StyledButton>Read More</StyledButton>
        <StyledDate>Last update on {blog.date}</StyledDate>
      </StyledTextWrapper>
    </StyledCard>
  )
}
