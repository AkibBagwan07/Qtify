import React from 'react'
import headphones from "../../assests/vibrating-headphone 1.png"
import styles from "./hero.module.css"
const hero = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.headingBody}>
            <h1 className={styles.head}>100 Thousand Songs, ad-free</h1>
            <h1 className={styles.head}>Over thousands podcast episodes</h1>
        </div>
        <div>
            <img className={styles.headphone} src={headphones} alt="headphones"/>
        </div>
    </div>
  )
}

export default hero