import React from 'react'
import "./Sidebar.scss"
import HomeIcon from "../../img/home-icon.svg"
import SearchIcon from "../../img/search.svg"
import LikedSongs from "../../img/LikedSongs.svg"
import LibraryIcon from "../../img/library.svg"
import CreatePlaylist from "../../img/createPlaylist.svg"
import Container from '../../utils/Utils'

const Sidebar = () => {
  return (
    <div className='sidebar-wrapper'>
      <Container>
        <ul className='major'>
          <li> <img src={HomeIcon} alt="" /> Home</li>
          <li> <img src={SearchIcon} alt="" /> Search</li>
          <li> <img src={LibraryIcon} alt="" /> Your Library</li>
          <li> <img src={CreatePlaylist} alt="" /> Create Playlist</li>
          <li> <img src={LikedSongs} alt="" /> Liked Songs</li>
        </ul>

        {/* <ul className='minor'>
          <li></li>
          <li></li>
          <li></li>
        </ul> */}

      </Container>
    </div>
  )
}

export default Sidebar
