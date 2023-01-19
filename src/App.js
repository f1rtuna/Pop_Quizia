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
  // try to get 5 questions per each page here 0->5 initially
  const [indexes, setIndexes] = useState([0,5]) 

  useEffect(() =>{
    setLoading(false)
    axios.get(quiz)
      .then(res => res.data)
      .then(data => {
        const questions = data.results.map((question) => ({
          ...question,
          answers:[question.correct_answer, ...question.incorrect_answers].sort(() => Math.random() - 0.5)
        }))
        setQuestions(questions)
      });
  },[])
  // useEffect(() =>{
  //   setLoading(false)
  //   axios.get(quiz).then(res =>{
  //     setQuestions(res.data.results.map(q => {
  //       return {...q,
  //             id: nanoid(),
  //             reveal: false,
  //             questions: []}
  //     }))
  //   })
  // }, [])

  function start_game(){
    setStarted(true)
  }

  if (loading) return <Loading />
  return (
    <div className = "quiz-container">
      {started ? <QuizPage
                  questions = {questions.slice(indexes[0], indexes[1])}
                  />
               : <HomePage 
                  // started = {started}
                  start_game = {start_game}
                  />} 
    </div>
  );
}

export default App;
