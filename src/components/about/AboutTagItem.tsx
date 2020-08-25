import React from 'react'
import styled from 'styled-components'

interface Props {
  tagItem: {
    icon: string
    text: string
  }
}

const StyledButton = styled.button`
  border: 1px solid #03a9f4;
  color: #03a9f4;
  width: auto;
  font-size: 13px;
  padding: 5px 20px;
  border-radius: 25px;
  margin-right: 10px;
  margin-bottom: 15px;
  background-color: rgba(0, 0, 0, 0);
  transition: color 0.5s, background-color 0.5s, border 0.5s;
  &:hover {
    color: white;
    background-color: #03a9f4;
  }
  &:focus {
    outline: none;
  }
`

const StyledIcon = styled.i`
  font-size: 18px;
  padding-right: 5px;
`

export const AboutTagItem: React.FC<Props> = ({ tagItem }) => {
  return (
    <StyledButton>
      <StyledIcon className={tagItem.icon}></StyledIcon>
      {tagItem.text}
    </StyledButton>
  )
}
