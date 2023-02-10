import React,{useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay,faAngleLeft,faAngleRight, faForward, faBackward } from '@fortawesome/free-solid-svg-icons'

export const Player = ({currentSong}) => {
  const audioRef = useRef(null);
  //events handler
  const playSongHandler=()=>{
console.log(audioRef.current);
audioRef.current.play();
  }
  return (
    <div className="player">
        <div className='time-control'>
            <p>Start Time</p>
            <input type="range"/>
            <p>End Time</p>
        </div>

        <div className='play-control'>
         
        <FontAwesomeIcon size="2x" className='skip-back' icon ={faForward}/>
              <FontAwesomeIcon onClick={playSongHandler} size="2x" className='play' icon={faPlay}/>
            <FontAwesomeIcon size="2x" className='skip-forward' icon ={faBackward}/>
        </div>  
        <audio ref={audioRef} src={currentSong.audio}> </audio>
    </div>
  
  )
}


export default Player;