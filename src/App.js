import './App.css';
import React from 'react';
import useWordGame from './Hooks/useWordGame';


function App() {
  const { inputRef, handleChange, text, gameRunning, timeRemaining, startClock, wordCount } = useWordGame();

  return (
    <div>
      <h1>How fast do you type ?</h1>
      <textarea
        ref={inputRef}
        disabled={!gameRunning}
        onChange={handleChange}
        value={text}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button disabled={gameRunning} onClick={() => startClock()}>Start</button>
      <h1>Word Count: {wordCount}</h1>
    </div>
  );
}

export default App;
