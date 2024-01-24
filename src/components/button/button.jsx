import React from 'react'
import ButtonStyle from "./button.module.css"
const button = ({text}) => {
  return (
    <div className={ButtonStyle.button}>{text}</div>
  )
}

export default button