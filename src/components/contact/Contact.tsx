import React from 'react'

import * as S from '../../styles/shared'
import styled from 'styled-components'
const StyledForm = styled.div`
  width: 600px;
  margin: 0 auto;
  text-align: center;
  @media (max-width: 768px) {
    width: 90%;
  }
`
const StyledInputWrapper = styled.div`
  margin: 15px 0;
  text-align: left;
`
const StyledInput = styled.input`
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 15px;
  width: 100%;
  padding: 5px 10px;
  margin-top: 5px;
  &:focus {
    outline: none;
  }
`
const StyledTextarea = styled.textarea`
  height: 200px;
  resize: none;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 15px;
  width: 100%;
  margin-top: 5px;
  padding: 5px 10px;
  &:focus {
    outline: none;
  }
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

export const Contact: React.FC = () => {
  return (
    <S.StyledContainer id="contact">
      <S.StyledSectionTitle data-aos="fade-up">Contact Me</S.StyledSectionTitle>
      <S.StyledSectionSubtitle data-aos="fade-up">
        Wanna grap a coffee sometime?
      </S.StyledSectionSubtitle>

      <StyledForm data-aos="fade-up">
        <StyledInputWrapper>
          <p>Name</p>
          <StyledInput type="text"></StyledInput>
        </StyledInputWrapper>

        <StyledInputWrapper>
          <p>Email Address</p>
          <StyledInput type="email"></StyledInput>
        </StyledInputWrapper>
        <StyledInputWrapper>
          <p>Subject</p>
          <StyledTextarea></StyledTextarea>
        </StyledInputWrapper>
        <StyledButton>SEND</StyledButton>
      </StyledForm>
    </S.StyledContainer>
  )
}
