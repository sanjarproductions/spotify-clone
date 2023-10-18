import React from 'react'
import "./Sidebar.scss"
import HomeIcon from "../../img/home-icon.svg"
import SearchIcon from "../../img/search.svg"
import LikedSongs from "../../img/LikedSongs.svg"
import LibraryIcon from "../../img/library.svg"
import CreatePlaylist from "../../img/createPlaylist.svg"
import Container from '../../utils/Utils'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const TOKEN = localStorage.getItem("token")
  const [sidebarData, setSidebarData] = useState([])

  useEffect(() => {
    fetch("https://api.spotify.com/v1/browse/featured-playlists", {
      headers: {
        "Authorization": TOKEN,
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => setSidebarData(data))
  },[])

  // console.log(sidebarData);
  return (
    <div className='sidebar-wrapper'>
      <Container>
        <ul className='major'>
          <Link to={"/"} className='li'> <img src={HomeIcon} alt="" /> Home</Link>
          <li className='li'> <img src={SearchIcon} alt="" /> Search</li>
          <li className='li'> <img src={LibraryIcon} alt="" /> Your Library</li>
          <li className='li'> <img src={CreatePlaylist} alt="" /> Create Playlist</li>
          <Link to={"/liked-songs"} className='li'> <img src={LikedSongs} alt="" /> Liked Songs</Link>
        </ul>

        <ul className='minor'>
          {
            sidebarData?.playlists?.items.map(links => 
              <Link key={links.id} to={`/mixes/${links.id}`}>{links.name}</Link>
            )
          }
        </ul>

      </Container>
    </div>
  )
}

export default Sidebar
