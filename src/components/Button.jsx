import React from "react"
import styled from "styled-components"

const StyledBtn = styled.button`
  border: none;
  background-color: rgb(80, 60, 209);
  font-size: 24px;
  color: rgb(255, 255, 255);
  font-weight: bold;
  cursor: pointer;
  border-radius: 0.5rem;
  outline: none;
}

&:hover {
  background-color: rgb(61, 43, 184);
}

&.equals {
  grid-column: 3 / 5;
  background-color: rgb(243, 61, 29);
}

&.equals:hover {
  background-color: rgb(228, 39, 15);
}

&.clear{
  grid-column: 1/4;
}
`

export const Button = ({ className, value, onClick }) => {
  return (
    <StyledBtn className={className} onClick={onClick}>
      {value}
    </StyledBtn>
  )
}
