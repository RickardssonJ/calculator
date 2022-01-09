import React from "react"
import { Textfit } from "react-textfit"
import "./styledScreen.css"

export const Screen = ({ value }) => {
  return (
    <Textfit className="styledScreen" mode="single" max={70}>
      {value}
    </Textfit>
  )
}
