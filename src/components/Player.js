import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay,faAngleLeft,faAngleRight, faForward, faBackward } from '@fortawesome/free-solid-svg-icons'

export const Player = () => {
  return (
    <div classname="player">
        <div className='time-control'>
            <p>Start Time</p>
            <input type="range"/>
            <p>End Time</p>
        </div>
        <div className='play-control'>

            <FontAwesomeIcon size="2x" className='skip-back' icon ={faForward}/>

            <FontAwesomeIcon size="2x" className='play' icon={faPlay}/>
           
            <FontAwesomeIcon size="2x" className='skip-forward' icon ={faBackward}/>
        </div>        
    </div>
  )
}


export default Player;