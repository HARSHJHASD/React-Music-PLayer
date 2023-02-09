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

            <FontAwesomeIcon className='skip-back' icon ={faForward}/>

            <FontAwesomeIcon className='play' icon={faPlay}/>
           
            <FontAwesomeIcon className='skip-forward' icon ={faBackward}/>
        </div>        
    </div>
  )
}


export default Player;