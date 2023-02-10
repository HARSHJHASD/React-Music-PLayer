import React from 'react';
import LibrarySongs from './LibrarySongs';
import '../styles/app.scss';

const Library = ({isPlaying,audioRef,songs,setCurrentSong}) => {
  return (
    <div className='library'>
        <h2>Library</h2>
        <div className="library-songs">
        {songs.map((song) =>(
            <LibrarySongs
            isPlaying={isPlaying} 
            audioRef={audioRef} 
            id={song.id} 
            key={song.id} 
            songs={songs} 
            setCurrentSong={setCurrentSong} 
            song={song}/>
            ))}
        </div>
    </div>
  )
}

export default Library;