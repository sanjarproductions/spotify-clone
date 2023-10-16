import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import "./Playlist.scss"
import PlayIcon from "../../img/playIcon.svg"
import Download from "../../img/dwnl.svg"

import { FiHeart } from "react-icons/fi";
import { FiMoreHorizontal } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { AiFillCaretDown } from "react-icons/ai";

const Playlist = () => {

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

    return (
        <div>
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
                        {playlistData?.tracks?.items.map(links =>
                            <a className='track__single' key={links.id}>
                                <img src={links.track.album.images?.[0]?.url} alt="" />
                                <div className="track__main_text">
                                    <h4>{links.track.name.length > 20 ? links.track.name.slice(0, 20) + '...' : links.track.name}</h4>
                                    <p>{links.track.artists[0].name}</p>
                                </div>
                                <p className='album__name'>{links.track.album.name}</p>
                                <FiHeart className='heart-single__song' />
                                <p className='track__length'>{Math.floor(links.track.duration_ms / 60000).toString() + ":" + Math.floor(links.track.duration_ms / 60000).toString().padStart(2, "0")}</p>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Playlist
