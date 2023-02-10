import React from 'react'
import '../styles/app.scss';


export const LibrarySong = ({isPlaying,song,songs,key,id,setCurrentSong,audioRef}) => {
    const songsSelectHandler = ()=>
    {
        const selectedSong =  songs.filter((state)=>state.id===id);
        console.log(selectedSong[0].id);
        setCurrentSong(selectedSong[0]);
        //audioRef.current.play();
        //check if song is playing...
        // setCurrentSong(song);
        
          const playPromise = audioRef.current.play();
          if(playPromise!==undefined)
          {
            playPromise.then((audio)=>
            {
              audioRef.current.play();
            });
          }
        
    };

  return (
    <div onClick={songsSelectHandler} className='library-song'>
        <img alt="can't load album file here" src={song.cover}></img>
        <div className='song-description'>
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
        </div>
        
    </div>
  );
} ;


export default LibrarySong;