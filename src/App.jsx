import React, { useState, useEffect, useRef } from 'react'
import './App.css'
import useWordGame from './useWordGame'

function App() {
  const {
    handleChange,
    text,
    isTimeRunning,
    textAreaRef,
    timeRemaining,
    startGame,
    words,
  } = useWordGame(30)

  return (
    <div>
      <h1>Speed Typer</h1>
      <textarea 
        name="text"
        id="text" 
        cols="30" rows="10" 
        onChange={handleChange}
        value={text}
        disabled={!isTimeRunning}
        ref={textAreaRef}>
      </textarea>
      <h4>Time remaining: {timeRemaining}</h4>
      <button disabled={isTimeRunning} onClick={startGame}>Start Game</button>
      <h1>Word Count: {words}</h1>
    </div>
  )
}

export default App
