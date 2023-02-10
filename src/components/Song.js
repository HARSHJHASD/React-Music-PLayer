import React from 'react'
import '../styles/app.scss';
export const Song = ({currentSong}) => {
  return (
    <div className='song-container'>
        <img src={currentSong.cover}></img>
        <h1>{currentSong.name}</h1>
        <h3>{currentSong.artist}</h3>
    </div>
  )
}
export default Song;