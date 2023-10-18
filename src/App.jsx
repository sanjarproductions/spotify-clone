import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/Home';
import Playlist from './routes/playlist/Playlist';
import LikedSongs from './routes/LikedSongs/LikedSongs';
import { useState,useEffect } from 'react';
import Player from './components/player/Player';

function App() {
  const [data, setData] = useState([])
  const CLIENT_ID = '622d0c7ed2204d0ab8ea5ae82de9f4fe'
  const SECRET_ID = 'c6a675c960b74aafb5562cf1c5d833af'

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + btoa(CLIENT_ID + ':' + SECRET_ID)
        },
        body: 'grant_type=client_credentials'
      })
      const auth = await response.json()
      localStorage.setItem('token', `${ auth.token_type } ${ auth.access_token }`);
      setData(auth.access_token)
    }
    fetchData()

  }, [])

  return (
    <>
    <Player/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/mixes/:id' element={<Playlist/>} />
        <Route path='/liked-songs' element={<LikedSongs/>} />
      </Routes>
    </>
  );
}

export default App;
