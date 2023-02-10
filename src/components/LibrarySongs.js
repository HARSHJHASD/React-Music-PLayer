import React from 'react'
import '../styles/app.scss';


export const LibrarySong = ({song}) => {
  return (
    <div className='library-song'>
        <img alt="can't load album file here" src={song.cover}></img>
        <div className='song-description'>
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
        </div>
        
    </div>
  );
} ;


export default LibrarySong;