import React from 'react';
import './App.css';

import Header from './header/header.js';
import VideosList from './videos-list/VideosList.js';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <VideosList></VideosList>
    </div>
  );
}

export default App;
