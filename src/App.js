import React from 'react';
import './App.css';

import Announcement from './components/Announcement';
import Conversation from './components/Conversation';
import Header from './components/Header';

import User from './components/modules/user';

function App() {
  return (
    <div className="App">
      <div className="max-w-4xl mx-auto text-gray-600 text-center p-4">
        <Announcement />
        <Header />
        
      </div>      
      <div className="text-center">
        <User name={"Martha"} />
      </div>
      <div className="max-w-lg mx-auto bg-white">
        <Conversation  agent={"Martha"}/>

      </div>
    </div>
  );
}

export default App;
