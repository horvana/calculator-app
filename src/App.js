import './App.css';
import Screen from './components/Screen';
import Keypad from './components/Keypad';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Screen />
      <Keypad />
      <p> Made by horvana</p>
    </div>
  );
}

export default App