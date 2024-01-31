import React from 'react'
import styles from "./button.module.css";
import FeedBack from '../feedBack/feedBack';

const Button = ({text}) => {
  return (
    <button onClick={()=>{alert("clicked")}} className={styles.button} >{text}</button>
  )
}

export default Button