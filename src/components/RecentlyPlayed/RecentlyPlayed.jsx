import React from 'react'
import "./RecentlyPlayed.scss"
import Container from '../../utils/Utils'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const RecentlyPlayed = () => {
  const TOKEN = localStorage.getItem("token")
  const [playlistMain, setPlaylistMain] = useState([])

  useEffect(() => {
    fetch("https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFQ00XGBls6ym/playlists", {
      headers: {
        "Authorization": TOKEN,
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => { data.playlists.items = data.playlists.items.slice(0, 4); setPlaylistMain(data); });
  }, []);

  console.log(playlistMain);

  return (
    <div className='playlistMain-wrapper'>
      <Container>
        <h3 className='playlist-title'>Recently Played</h3>
        <div className="wrapper-playlist-flex">
          {
            playlistMain?.playlists?.items.map(links =>
              <Link className='main-playlist playlist-item' key={links.id} to={`/mixes/${links.id}`}>
                <img src={links.images[0].url} alt="" />
                <b className=''>{links.name}</b>
                <p>{links.description}</p>
              </Link>
            )
          }
        </div>
      </Container>
    </div>
  )
}

export default RecentlyPlayed
