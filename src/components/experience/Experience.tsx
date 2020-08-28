import React from 'react'
import { ExperienceTimeLine } from './ExperienceTimeLine'
import * as S from '../../styles/shared'

export const Experience: React.FC = () => {
  return (
    <S.StyledContainer>
      <S.StyledSectionTitle data-aos="fade-up">
        Experiences
      </S.StyledSectionTitle>

      <S.StyledSectionSubtitle data-aos="fade-up">
        All the steps in my journey.
      </S.StyledSectionSubtitle>
      <ExperienceTimeLine />
    </S.StyledContainer>
  )
}
