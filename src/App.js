import React from 'react';
import Song from "./components/Song";
import Player from "./components/Player";

import "./styles/app.scss";

export const App = () => {
  return (
    <div className='App'>
      <h1>Music Player</h1>
      <Song/>
      <Player/>
    </div>
  );
}
export default App;
