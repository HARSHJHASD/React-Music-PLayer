import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay,faAngleLeft,faAngleRight,faPause } from '@fortawesome/free-solid-svg-icons';
import '../styles/app.scss';

export const Player = ({setCurrentSong,songs,setSongInfo,songInfo,audioRef,currentSong,isPlaying,setIsPlaying}) => {


  //events handler=
  const playSongHandler=()=>{
if(isPlaying){
audioRef.current.pause();
setIsPlaying(!isPlaying);
 }else{
  audioRef.current.play();
  setIsPlaying(!isPlaying);
}
  };
  //fx for duration of the song.
 
  const getTime = (time) =>
  {
    return (
      Math.floor(time/60) + ":" + ("0"+Math.floor(time%60)).slice(-2)
    );
  }

  const dragHandler =(e)=>{
    audioRef.current.currentTime = e.target.value;
    setSongInfo({...songInfo,currentTime:e.target.value})
    //setSongInfo({...songInfo,currentTime : e.Target.value});
  };
  const skipTrackHandler = (direction)=>
  {
    let currentIndex  =songs.findIndex((song)=>song.id===currentSong.id);
    if(direction==='skip-forward')
    {
      setCurrentSong(songs[(currentIndex+1)%songs.length]);
    }
    else if(direction==='skip-backward'){
      setCurrentSong(songs[Math.abs  ((currentIndex+1)%songs.length   )] );
    }
  };

 

  return (
    <div className="player">
        <div className='time-control'>
            <p>{getTime(songInfo.currentTime)}</p>
            <input 
            min={0} 
            onChange={dragHandler} 
            max={songInfo.duration || 0} 
            value={songInfo.currentTime} 
            type="range"/>
            <p>{getTime(songInfo.duration)}</p>
        </div>

        <div className='play-control'>
         
        <FontAwesomeIcon onClick={
          ()=>skipTrackHandler("skip-backward")}
         size="2x" 
         className='skip-backward' 
         icon ={faAngleLeft}/>

         <FontAwesomeIcon onClick={playSongHandler} size="2x" className='play' icon={isPlaying?faPause:faPlay}/>

        <FontAwesomeIcon onClick={
          ()=>skipTrackHandler("skip-forward")} 
          size="2x"
           className='skip-forward' 
           icon ={faAngleRight}/>
        </div>  
    </div>
  
  )
}


export default Player;