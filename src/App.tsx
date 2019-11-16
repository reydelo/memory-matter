import React from 'react';
import Board from './Board';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>Memory</p>
        <img src="/logo512.png" className="App-logo" alt="logo" />
        <p>Matter</p>
      </header>
      <Board />
    </div>
  );
}

export default App;
