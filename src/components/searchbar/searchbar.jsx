import React from 'react'
import SearchbarStyle from "./searchbar.module.css"
import {ReactComponent as SearchIcon} from "../../assests/search.svg"
import searchbarStyle from "./searchbar.module.css"
const searchbar = ({text}) => {
  return (
    <form className={searchbarStyle.wrapper}>
        <div>
        <input className={SearchbarStyle.search} placeholder={text}/>
        </div>
        <div>
          <button  className={searchbarStyle.searchButton} type='submit'>
            <SearchIcon/>
          </button>
        </div>
    </form>
  )
}

export default searchbar