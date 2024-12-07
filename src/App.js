import React from 'react';
import './App.css';

import Announcement from './components/Announcement';
import Conversation from './components/Conversation';
import Header from './components/Header';

import User from './components/modules/user';

function App() {
  return (
    <div id='App' className="App p-4">
      <div className="max-w-4xl mx-auto text-gray-600 text-center">
        <Announcement />
        <Header />
        
      </div>      
      <div className="text-center">
        <User name={"Martha"} />
      </div>
      <div id="conversation" className="mb-[10px] max-w-lg mx-auto bg-white">
        <Conversation  agent={"Martha"}/>
      </div>
    </div>
  );
}

export default App;
