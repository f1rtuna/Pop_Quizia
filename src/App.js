import React, {useState, useEffect} from "react"
import QuizPage from "./components/QuizPage"
import Loading from "./components/Loading"
import HomePage from "./components/HomePage"
import axios from 'axios'
import { nanoid } from "nanoid";
import './App.css';
// https://opentdb.com/api.php?amount=10

function App() {
  const length = 10;
  const [started, setStarted] = useState(false)
  const [loading, setLoading] = useState(true)
  const [quizLink, setQuizLink] = useState(`https://opentdb.com/api.php?amount=${length}`)
  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)

  useEffect(() =>{
    setLoading(false)
    axios.get(quizLink)
      .then(res => res.data)
      .then(data => {
        setQuestions(data.results)
      });
  },[])

  console.log("questions: ")
  console.log(questions)

  function start_game(){
    setStarted(true)
  }

  function checkAnswer(response){
    if (response === questions[currentIndex].correct_answer){
      console.log("Correct!")
      setScore(prev => prev + 1)
      // setCurrentIndex(prev => prev + 1)
    } else{
      console.log("nope!")
    }
    setCurrentIndex(prevIndex => prevIndex + 1)
  }

  if (loading) return <Loading />
  return (
    <div className = "quiz-container">
      {started ? (currentIndex < questions.length ? <QuizPage
                  id = {nanoid()}
                  checkAnswer = {checkAnswer}
                  question = {questions[currentIndex]}
                  /> : <div>
                      {`Congrats you finished the Quiz! you scored: ${score}`}
                    </div>)
               : <HomePage 
                  // started = {started}
                  start_game = {start_game}
                  />} 
    </div>
  );
}

export default App;
