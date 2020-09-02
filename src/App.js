import React from 'react';
import cat from './cat.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={cat} className="App-logo" alt="cat" />
        <p>
          your cat is the coolest
        </p>
      </header>
    </div>
  );
}

export default App;
