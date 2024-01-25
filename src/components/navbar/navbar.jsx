import React from 'react'
import navStyle from "./navbar.module.css"
import LogoJsx from "../logo/logo"
import Button from "../button/button"
import Searchbar from '../searchbar/searchbar'
const navbar = () => {
  return (
    <nav className={navStyle.navbar}>
      <LogoJsx className={navStyle.logoDiv}/>
      <Searchbar text="Search a album of your choice"/>
      <Button text="Give Feedback"/>
    </nav>
  )
}

export default navbar