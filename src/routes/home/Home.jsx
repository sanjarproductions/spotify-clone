import React from 'react'
import "./Home.scss"
import Header from "../../components/Header/Header"
import YourTopMixes from '../../components/YourTopMixes/YourTopMixes'
import MadeForYou from '../../components/MadeForYou/MadeForYou'
import RecentlyPlayed from '../../components/RecentlyPlayed/RecentlyPlayed'
import JumpBackIn from '../../components/JumpBackIn/JumpBackIn'
import UniquelyYours from '../../components/UniquelyYours/UniquelyYours'
import Sidebar from '../../components/Sidebar/Sidebar'
import SidebarFriends from '../../components/SidebarFriends/SidebarFriends'


const Home = () => {
    return (
        <div className='home-wrapper'>
            <div className="main-wrapper">
                <Sidebar />
                <div className="main__content">
                    <Header />
                    <YourTopMixes />
                    <MadeForYou />
                    <RecentlyPlayed />
                    <JumpBackIn />
                    <UniquelyYours />
                </div>
                <SidebarFriends />
            </div>
        </div>
    )
}

export default Home
