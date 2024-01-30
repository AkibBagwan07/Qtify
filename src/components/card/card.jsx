import { Chip, Tooltip } from '@mui/material';
import React from 'react'
import style from "./card.module.css"

const Card = ({data,type}) => {
  
    const getCard = (type) =>{
     switch (type){
       case "album" : {
        const {image,follows,title,songs} = data;
        return (
            <div>
               <Tooltip title={`${songs.length} songs`} placement='top' arrow> 
               <div className={style.wrapper}>
                <div className={style.card}>
                    <img src={image} alt="album" />
                <div className={style.banner}><Chip label={`${follows} follows`} size="small" className={style.chip}/></div>
                </div>
                <div className={style.titleWrapper}>
                   <p>{title}</p>  
                </div>
                </div> 
               </ Tooltip> 
            </div>
        )
       }
       default:return <></>
     }
    }
    return getCard(type)
}

export default Card