import React, {useState, useEffect} from "react"
import QuizPage from "./components/QuizPage"
import Loading from "./components/Loading"
import HomePage from "./components/HomePage"
import axios from 'axios'
import { nanoid } from "nanoid";
import './App.css';
// https://opentdb.com/api.php?amount=10

function App() {
  const [started, setStarted] = useState(false)
  const [loading, setLoading] = useState(true)
  const [quiz, setQuiz] = useState("https://opentdb.com/api.php?amount=10")
  const [questions, setQuestions] = useState([])

  useEffect(() =>{
    setLoading(false)
    axios.get(quiz).then(res =>{
      setQuestions(res.data.results.map(q => {
        return {...q,
              selected_answer: "",
              id: nanoid(),
              reveal: false}
      }))
    })
  }, [])

  function start_game(){
    setStarted(true)
  }

  if (loading) return <Loading />
  return (
    <div className = "quiz-container">
      {started ? <QuizPage />
               : <HomePage 
                  // started = {started}
                  start_game = {start_game}
                  />} 
    </div>
  );
}

export default App;
