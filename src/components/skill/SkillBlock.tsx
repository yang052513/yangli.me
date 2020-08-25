import React from 'react'
import styled from 'styled-components'
import * as S from '../../styles/shared'
interface Props {
  imgUrl: any
  title: any
  content: any
}

const StyledContainer = styled.div`
  text-align: center;
  flex: 0 1 350px;
  margin: 0 30px 20px 30px;
`

const StyledTitle = styled.h4`
  font-size: 18px;
  margin: 25px 0;
`

const StyledImage = styled.img`
  width: 70px;
  height: 70px;
`

export const SkillBlock: React.FC<Props> = ({ imgUrl, title, content }) => {
  return (
    <StyledContainer>
      <StyledImage src={imgUrl} alt="" />
      <StyledTitle>{title}</StyledTitle>
      <S.StyledText>{content}</S.StyledText>
    </StyledContainer>
  )
}
