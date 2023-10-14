import React from 'react'
import "./Home.scss"
import Header from "../../components/Header/Header"
import PlaylistMain from '../../components/PlaylistMain/PlaylistMain'
import Sidebar from '../../components/Sidebar/Sidebar'
import SidebarFriends from '../../components/SidebarFriends/SidebarFriends'


const Home = () => {
    return (
        <div className='home-wrapper'>
            <div className="main-wrapper">
                <Sidebar />
                    <div className="main__content">
                        <Header />
                        <PlaylistMain />
                    </div>
                <SidebarFriends/>
            </div>
        </div>
    )
}

export default Home
