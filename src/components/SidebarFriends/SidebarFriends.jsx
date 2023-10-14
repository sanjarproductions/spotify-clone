import React from 'react'
import "./SidebarFriends.scss"
import Container from '../../utils/Utils'
import addFriend from "../../img/addFriend.svg"
import { FiX } from "react-icons/fi";

const SidebarFriends = () => {
  return (
    <div className='addFriend'>
      <Container>

        <b className=''>Friend Activity 
          <div className="icons">
            <img src={addFriend} alt="" />
            <FiX/>
          </div>
        </b>

        <p>Let friends and followers on Spotify see what you’re listening to.</p>
      </Container>
    </div>
  )
}

export default SidebarFriends
