import React from 'react'
import { AboutTag, AboutResume } from './index'
import styled from 'styled-components'
import * as S from '../../styles/shared'

const StyledContainer = styled.div`
  /* border: 1px solid red; */
  flex: 0 1 700px;
`

export const AboutContent: React.FC = () => {
  return (
    <StyledContainer>
      <S.StyledText>
        I'm currently Term 3 Computer Systems Technology student at BCIT. I have
        extensive knowledge and experience of front-end development including
        React, Redux, Typescript, Material UI, Respsonive Layout Design, UI/UX
        design, and RESTful API designs. I also like to develop IOS app on my
        free time.
      </S.StyledText>
      <S.StyledText>
        Beside my academic and career, I am a competitive powerlifter competed
        at Provincial Champion. My dream is one day I could step into the
        Canadian Powerlifting Union Stage and competed in national level.
      </S.StyledText>

      <AboutTag />
      <AboutResume />
    </StyledContainer>
  )
}
