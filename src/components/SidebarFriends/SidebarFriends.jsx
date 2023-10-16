import React from 'react'
import "./SidebarFriends.scss"
import Container from '../../utils/Utils'
import addFriend from "../../img/addFriend.svg"
import User from "../../img/user.svg"
import { FiX } from "react-icons/fi";

const SidebarFriends = () => {
  return (
    <div className='addFriend'>
      <Container>

        <b className='saidebarFriends-title'>Friend Activity
          <div className="icons">
            <img src={addFriend} alt="" />
            <FiX />
          </div>
        </b>
        <p className='saidebarFriends-desc'>Let friends and followers on Spotify see what you’re listening to.</p>


        <img src={User} alt="" className='user-photo'/>
        <img src={User} alt="" className='user-photo'/>
        <img src={User} alt="" className='user-photo'/>
        <p className='saidebarFriends-desc'>Go to Settings {`>`} Social and enable “Share my listening activity on Spotify.’ You can turn this off at any time.</p>
        <button className='settings-btn'>SETTINGS</button>
      </Container>
    </div>
  )
}

export default SidebarFriends
