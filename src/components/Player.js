import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay,faAngleLeft,faAngleRight,faPause } from '@fortawesome/free-solid-svg-icons';
import '../styles/app.scss';


export const Player = ({changeIcon,
  setCurrentSong,
  songs,
  setSongs,
  setSongInfo,
  songInfo,
  audioRef,
  currentSong,
  isPlaying,
  setIsPlaying}) => {
//useEffect i.e if song changes,anything changes then we will make sure that
const activeLibraryHandler=(nextPrev)=>
{
  const newSongs = songs.map((song)=>
  {
    if(song.id===currentSong.id)
    return{
    ...song,
    active :true,
    };
    else{
      return{
      ...song,
      active : false,
      };
    }
  });
  setSongs(newSongs);
}
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
  const skipTrackHandler = async(direction)=>
  {
    let currentIndex  =songs.findIndex((song)=>song.id===currentSong.id);
    if(direction==='skip-forward'){
      // console.log(songs[(currentIndex+1)%songs.length]);
      await setCurrentSong(songs[(currentIndex+1)%songs.length]);
      activeLibraryHandler(songs[(currentIndex+1)%songs.length]);

    }
    if(direction==='skip-backward'){
      if(currentIndex===0){
       await setCurrentSong(songs[songs.length-1]);
       activeLibraryHandler(songs[songs.length-1]);
        if(isPlaying) audioRef.current.play();
        return ;
      }
       setCurrentSong(songs[currentIndex-1]);
       activeLibraryHandler(songs[currentIndex-1]);
    }
      // if((currentIndex-1)%songs.length===-1){
      //   setCurrentSong(songs[songs.length-1]);
  if(isPlaying) audioRef.current.play();
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
            <p>{songInfo.duration ? getTime(songInfo.duration):"0:00"}</p>
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