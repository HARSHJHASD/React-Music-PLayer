import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';


const Nav = ({libraryStatus,setLibraryStatus}) => {
  return (
    <div>
        <nav>
            <h1>Library</h1>
            <button onClick={()=>setLibraryStatus(!libraryStatus)}>
                <FontAwesomeIcon icon={faMusic}/>
            </button>
        </nav>
    </div>
  )
}

export default Nav