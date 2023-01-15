import {useState, useEffect, useRef} from 'react'

function useWordGame(startingTime) {
    const TIME_REMAINING = 10

    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(startingTime)
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const [words, setWords] = useState(0)
    const textAreaRef = useRef(null)
  
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
      setTimeRemaining(startingTime)
      setIsTimeRunning(true)
      setText("")
      textAreaRef.current.disabled = false
      textAreaRef.current.focus()
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

    return {handleChange, text, isTimeRunning, textAreaRef, timeRemaining, startGame, words}

}

export default useWordGame