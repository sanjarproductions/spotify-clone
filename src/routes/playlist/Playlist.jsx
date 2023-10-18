import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import "./Playlist.scss"
import "./player.js"
import PlayIcon from "../../img/playIcon.svg"
import Download from "../../img/dwnl.svg"
import { FiHeart } from "react-icons/fi";
import { FiMoreHorizontal } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { AiFillCaretDown } from "react-icons/ai";
import { useDispatch } from 'react-redux'

const Playlist = () => {
    const dispatch = useDispatch()
    const TOKEN = localStorage.getItem("token");
    const [playlistData, setPlaylistData] = useState([]);

    let playlistUrl = useParams();

    useEffect(() => {
        fetch(`https://api.spotify.com/v1/playlists/${playlistUrl.id} `, {
            headers: {
                "Authorization": TOKEN,
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => setPlaylistData(data))
    }, [])

    console.log(playlistData);

    function likeTheSong(addProduct) {
        dispatch({ payload: addProduct, type: "ADD_TO_LIKED" })
    }

    return (
        <div className='playlist__body'>
            <div className="main-playlistPg-flex">
                <Sidebar />
                <div className="main-playlist-wrapper">
                    <div className="playlist-wrapper-data">
                        <div className='container'>

                            <img src={playlistData.images?.[0].url} alt="" />
                            <div className="playlist-wrapper-data-text">
                                <p>{playlistData.type}</p>
                                <h1>{playlistData.name}</h1>
                                <p>{playlistData.description}</p>
                            </div>


                        </div>

                    </div>
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

                    <div className="tracks-section">
                        {/* {playlistData?.tracks?.items.map((links) => (
                            <div className="track__single" key={links.track.id}>

                                <audio className="audioPlayer" controls src={links.track.preview_url}></audio>
                                <img className="songImage" src={links.track.album.images?.[0]?.url} alt="" />
                                <div className="track__main_text">
                                    <h4 className="songTitle">{links.track.name.length > 20 ? links.track.name.slice(0, 20) + '...' : links.track.name}</h4>
                                    <p>{links.track.artists[0].name}</p>
                                </div>
                                <p className="album__name">{links.track.album.name}</p>

                                <div className='animation'>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>

                                <FiHeart onClick={() => likeTheSong(links)} className="heart-single__song" />

                                <p className="track__length">{Math.floor(links.track.duration_ms / 60000).toString() + ":" + Math.floor(links.track.duration_ms / 60000).toString().padStart(2, "0")}</p>
                            </div>
                        ))} */}

                        {playlistData?.tracks?.items.map((links) => (
                            <div className="track__single" key={links.track.id}>
                                <audio className="audioPlayer" controls src={links.track.preview_url}></audio>
                                <img className="songImage" src={links.track.album.images?.[0]?.url} alt="" />
                                <div className="track__main_text">
                                    <h4 className="songTitle">{links.track.name.length > 20 ? links.track.name.slice(0, 20) + '...' : links.track.name}</h4>
                                    <p>{links.track.artists[0].name}</p>
                                    <p>{links.track.name}</p> {/* Display the track name */}
                                </div>
                                <p className="album__name">{links.track.album.name}</p>
                                
                                <div className='animation'>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>

                                <FiHeart onClick={() => likeTheSong(links)} className="heart-single__song" />
                                <p className="track__length">{Math.floor(links.track.duration_ms / 60000).toString() + ":" + Math.floor(links.track.duration_ms / 60000).toString().padStart(2, "0")}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Playlist