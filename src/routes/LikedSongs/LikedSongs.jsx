import React from 'react'
import "./LikedSongs.scss"
import { useSelector } from 'react-redux'
import Sidebar from "../../components/Sidebar/Sidebar"
import likedSongs from "../../img/likedSongs.png"
import PlayIcon from "../../img/playIcon.svg"
import Download from "../../img/dwnl.svg"
import { FiHeart } from "react-icons/fi";
import { FiMoreHorizontal } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { AiFillCaretDown } from "react-icons/ai";
const LikedSongs = () => {

  const dataLiked = useSelector(state => state.like.likeReducer);
  console.log(dataLiked);

  return (
    <div className='main-flex-liked-songs'>
      <Sidebar />
      <div className="liked-main-wrapper">

        <div className="header-likedsongs">
          <img src={likedSongs} alt="" />

          <div className="text-wrapper">
            <p>PUBLIC PLAYLIST</p>
            <h1>Liked Songs</h1>
          </div>
        </div>

        <div className="body-likedsongs">
          <div className="controls">

            <div className="play">
              <img src={PlayIcon} alt="" />
              <FiHeart />
              <img src={Download} alt="" />
              <FiMoreHorizontal />
            </div>

            <div className="filter">
              <FiSearch className='searchIcon' />
              <p>Custom order <AiFillCaretDown /></p>
            </div>
          </div>
          <div className="liked-songs-wrapper">
            <div className="liked-content">

              {dataLiked?.payload?.track?.map((item) => (
                <div className="music" key={item.track.id}>
                  <div className="msc-main">
                    <img src={item.track.album.images[0].url} alt="" />
                  </div>
                  <div className="music-info">
                    <p className='music-name'>{item.track.name}</p>
                    {/* Display the first artist's name, if available */}
                    {item.track.artists.length > 0 && (
                      <p className='music-artist'>{item.track.artists[0].name}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}


export default LikedSongs

