import React,{useState,useRef} from 'react';
import Song from "./components/Song";
import Player from "./components/Player";
import data from "./data";
import Library from "./components/Library";
import Nav from './components/Nav';

import "./styles/app.scss";

export const App = () => {
  const audioRef = useRef(null);
  //state
  const [songs,setSongs] = useState(data());
  const [currentSong,setCurrentSong] = useState(songs[0]);
  const [isPlaying,setIsPlaying]=useState(false);
   //state for timer in playing music
   const [songInfo,setSongInfo] = useState({
    currentTime : 0,
    duration:0,
});
const[libraryStatus,setLibraryStatus] = useState(false);
const timeUpdateHandler =(e)=>
{
const current = e.target.currentTime;
const duration = e.target.duration;
setSongInfo({...songInfo,currentTime: current,duration});
};
const songEndHandler = async() =>
{
  let currentIndex  =songs.findIndex((song)=>song.id===currentSong.id);
      // console.log(songs[(currentIndex+1)%songs.length]);
      await setCurrentSong(songs[(currentIndex+1)%songs.length]);
      if(isPlaying)
      {
        audioRef.current.play();
      }
}
  return (
    <div className={`App ${libraryStatus ? "library-active":""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={currentSong} />
      <Player 
      songs={songs}
      setSongInfo={setSongInfo} 
      songInfo={songInfo} 
      setIsPlaying={setIsPlaying} 
      audioRef={audioRef} 
      isPlaying={isPlaying} 
      currentSong={currentSong}
      setCurrentSong={setCurrentSong}
      setSongs = {setSongs}/>

      <Library 
      isPlaying={isPlaying} 
      audioRef={audioRef} 
      songs={songs} 
      setCurrentSong={setCurrentSong}
      setSongs={setSongs}
      libraryStatus = {libraryStatus}/>

      <audio 
      onTimeUpdate={timeUpdateHandler} 
      ref={audioRef} 
      onEnded={songEndHandler} autoPlay
      src={currentSong.audio}> </audio>
    </div> 
  );
}
export default App;
