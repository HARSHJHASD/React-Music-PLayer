import React,{useState} from 'react';
import Song from "./components/Song";
import Player from "./components/Player";
import data from "./util";

import "./styles/app.scss";

export const App = () => {
  //state
  const [songs,setSongs] = useState(data());
  return (
    <div className='App'>
      <Song/>
      <Player/>
    </div>
  );
}
export default App;
