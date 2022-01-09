import React from "react"
import styled from "styled-components"

const StyledWrapper = styled.div`
  width: 24rem;
  height: 34rem;
  padding: 1rem;
  border-radius: 1rem;
  background-color: #485461;
  background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);
`

export const Wrapper = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>
}
