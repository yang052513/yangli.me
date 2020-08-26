import React from 'react'

import styled from 'styled-components'

const StyledFooter = styled.div`
  margin: 0;
  padding: 20px;
  text-align: center;
  font-size: 12px;
  font-family: 'Quicksand', sans-serif;
  color: rgb(237, 236, 236);
  background-color: rgb(31, 31, 31);
`
export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <p>All right reserved Yang Li @2020</p>
    </StyledFooter>
  )
}
