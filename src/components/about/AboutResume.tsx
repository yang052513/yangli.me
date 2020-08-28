import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div``

const StyledButton = styled.button`
  height: 40px;
  border: 1px solid #fff;
  color: #fff;
  font-size: 15px;
  border-radius: 10px;
  line-height: 40px;
  background-color: #03a9f4;
  padding: 0 10px;
  cursor: pointer;
  transition: border 0.5s, color 0.5s, background-color 0.5s;
  &:hover {
    border: 1px solid #03a9f4;
    color: #03a9f4;
    background-color: rgba(0, 0, 0, 0);
  }
  &:focus {
    outline: none;
  }
  i {
    margin-left: 10px;
  }
`

export const AboutResume: React.FC = () => {
  return (
    <StyledContainer>
      <a
        href="https://drive.google.com/file/d/1Dl2enyqIxEzy4jnuaoCoz4JtgM2nDdIh/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledButton>
          DOWNLOAD RESUME
          <i className="fas fa-download"></i>
        </StyledButton>
      </a>
    </StyledContainer>
  )
}
