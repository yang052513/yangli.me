import React from 'react'
import { AboutTagItem } from './index'
import skillList from '../../data/skills.json'

import styled from 'styled-components'

const StyledContainer = styled.div`
  margin: 20px 0;
`

export const AboutTag = () => {
  const tagComponents = skillList.map(tag => (
    <AboutTagItem key={tag.icon} tagItem={tag} />
  ))

  return <StyledContainer>{tagComponents}</StyledContainer>
}
