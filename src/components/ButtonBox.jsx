import React from "react"
import styled from "styled-components"

const StyledButtonBox = styled.div`
  width: 100%;
  height: calc(100% - 110px);
  display: grid;
  /* grid-template-rows: repeat(5, 1fr); */
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.8rem;
`

export const ButtonBox = ({ children }) => {
  return <StyledButtonBox>{children}</StyledButtonBox>
}
