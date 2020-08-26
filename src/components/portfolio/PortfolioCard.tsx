import React from 'react'
import demo from '../../assets/images/portfolio/dollars.png'
import styled from 'styled-components'

const StyledCard = styled.div`
  display: flex;
  width: 70%;
  flex-wrap: wrap;
  margin-bottom: 20px;
  @media (max-width: 800px) {
    width: 100%;
  }
`
const StyledImage = styled.img`
  width: 400px;
  height: auto;
  object-fit: cover;
  flex: 1 1 400px;
  @media (max-width: 800px) {
    width: 100%;
  }
`
const StyledInfoWrapper = styled.div`
  flex: 1 1 200px;
  padding: 25px;
  background-color: #ecf7fd;
`

const StyledTitle = styled.h3`
  font-size: 20px;
`

const StyledDesc = styled.p`
  color: rgb(70, 70, 70);
  margin: 20px 0;
  font-size: 14px;
  line-height: 1.5rem;
`

const StyledToolsWrapper = styled.div`
  ul {
    list-style-type: none;
  }
`

const StyledTools = styled.li`
  display: inline-block;
  margin: 0 10px 10px 0;
  color: #a7a7a7;
  font-size: 14px;
`

const StyledGithub = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  i {
    font-size: 20px;
    margin-right: 10px;
  }
  a {
    color: rgb(70, 70, 70);
    text-decoration: none;
  }
`

const StyledDemoBtn = styled.button`
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

interface Props {
  isEven: boolean
  project: any
}

export const PortfolioCard: React.FC<Props> = ({ isEven, project }) => {
  return (
    <StyledCard>
      {isEven && (
        <StyledImage
          src={require(`../../assets/images/portfolio/${project.banner}`)}
          alt=""
        ></StyledImage>
      )}

      <StyledInfoWrapper>
        <StyledTitle>{project.title}</StyledTitle>
        <StyledDesc>{project.desc}</StyledDesc>
        <StyledToolsWrapper>
          <ul>
            {project.tags.map((tool: any) => (
              <StyledTools>{tool}</StyledTools>
            ))}
          </ul>
        </StyledToolsWrapper>

        <StyledGithub>
          <i className="fab fa-github"></i>
          <a href="https://github.com/yang052513/mywebsite">course-flex</a>
        </StyledGithub>
        <StyledDemoBtn>Live Demo</StyledDemoBtn>
      </StyledInfoWrapper>
      {!isEven && (
        <StyledImage
          src={require(`../../assets/images/portfolio/${project.banner}`)}
          alt=""
        ></StyledImage>
      )}
    </StyledCard>
  )
}
