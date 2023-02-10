import React,{useState,useRef} from 'react';
import Song from "./components/Song";
import Player from "./components/Player";
import data from "./util";
import Library from "./components/Library";

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
const timeUpdateHandler =(e)=>
{
const current = e.target.currentTime;
const duration = e.target.duration;
setSongInfo({...songInfo,currentTime: current,duration});
};
  return (
    <div className='App'>
      <Song currentSong={currentSong} />
      <Player 
      setSongInfo={setSongInfo} 
      songInfo={songInfo} 
      setIsPlaying={setIsPlaying} 
      audioRef={audioRef} 
      isPlaying={isPlaying} 
      currentSong={currentSong}/>

      <Library 
      isPlaying={isPlaying} 
      audioRef={audioRef} 
      songs={songs} 
      setCurrentSong={setCurrentSong}
      setSongs={setSongs}/>

      <audio 
      onTimeUpdate={timeUpdateHandler} 
      ref={audioRef} 
      src={currentSong.audio}> </audio>
    </div> 
  );
}
export default App;
