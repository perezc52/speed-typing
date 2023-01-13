import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const TIME_REMAINING = 10

  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(TIME_REMAINING)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [words, setWords] = useState(0)

  useEffect(() => {
    if(isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 1)
      }, 1000)
    }else if (timeRemaining === 0) {
      endGame()
    }
  }, [timeRemaining, isTimeRunning])

  function startGame() {
    setTimeRemaining(TIME_REMAINING)
    setIsTimeRunning(true)
    setText("")
  }

  function endGame() {
    setWords(calculateNumberOfWords(text))
    setIsTimeRunning(false)
  }

  function handleChange(event) {
    const {value} = event.target
    setText(value)
  }

  function calculateNumberOfWords(text) {
    console.log(text.trim().split(' ').filter(el => el !== "").length)
    return text.trim().split(' ').filter(el => el !== "").length
  }

  return (
    <div>
      <h1>Speed Typer</h1>
      <textarea 
        name="text"
        id="text" 
        cols="30" rows="10" 
        onChange={handleChange}
        value={text}
        disabled={!isTimeRunning}>
      </textarea>
      <h4>Time remaining: {timeRemaining}</h4>
      <button disabled={isTimeRunning} onClick={startGame}>Start Game</button>
      <h1>Word Count: {words}</h1>
    </div>
  )
}

export default App
