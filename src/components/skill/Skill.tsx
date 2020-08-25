import React from 'react'
import { SkillBlock } from './SkillBlock'
import styled from 'styled-components'
import * as S from '../../styles/shared'

const StyledContainer = styled.div`
  margin: 200px 50px;
`
const StyledGridWrapper = styled.div`
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  justify-items: center; */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

export const Skill: React.FC = () => {
  return (
    <StyledContainer>
      <S.StyledSectionTitle>Skills</S.StyledSectionTitle>
      <StyledGridWrapper>
        <SkillBlock
          imgUrl="resource/uidesign.png"
          title="UI/UX Design"
          content="I am proficient with Adobe Illustrator, Photoshop, Xd to design
                        elegent Web page layout. In addition, I have a lot of project experience with Adobe Affects that can
                        be utilized for video touch up."
        />
        <SkillBlock
          imgUrl="resource/webdesign.png"
          title="Web Development"
          content="I am a full stack web developer with expereince of html, css,
                        javascript, jquery, MongoDB, React, and others to create a dynamic and fully function websites"
        />
        <SkillBlock
          imgUrl="resource/develop.png"
          title="IOS App Development"
          content="I am also able to create IOS app with swift. I usually study IOS
                        developing courses during my spare time to extend my knowledge."
        />{' '}
      </StyledGridWrapper>
    </StyledContainer>
  )
}
