import React from 'react';
import Board from './Board';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>Memory Matter</p>
      </header>
      <Board />
    </div>
  );
}

export default App;
