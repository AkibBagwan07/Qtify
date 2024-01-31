import React from 'react'
import {ReactComponent as MusicPlayerPic} from "../../assests/musicPlayerPic.svg"
import {ReactComponent as PlayButton} from "../../assests/playButton.svg"
import {ReactComponent as PlayBar} from "../../assests/playerBar.svg"
import styles from  "./musicPlayer.module.css"

const MusicPlayer = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.albumpic}><MusicPlayerPic /></div>
        <div>
        <div className={styles.playbutton}><PlayButton /></div>
        <div className={styles.playbar}><p className={styles.min}>0:38</p><PlayBar /><p className={styles.min}>3:38</p></div>
        </div>
    </div>
  )
}

export default MusicPlayer