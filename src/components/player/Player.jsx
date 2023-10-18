import React from 'react'
import "./Player.scss"
import "../../routes/playlist/player.js"
import { BsFillPlayCircleFill } from "react-icons/bs";
import { BsFillPauseCircleFill } from "react-icons/bs";
import MixImg from "../../img/mix-music.svg"
import RepeatM from "../../img/repeat.svg"

const Player = () => {

    return (
        <div className='main-player-wrapper'>
            <div className="player-main">
                <img src={MixImg} alt="" />
                <div className="play-pause">
                    <BsFillPlayCircleFill className='play-icon' />
                    <BsFillPauseCircleFill className='pause-icon' />
                </div>
                <img src={RepeatM} alt="" />
            </div>
        </div>
    )
}

export default Player
