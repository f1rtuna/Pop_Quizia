import React, {useState, useEffect} from "react"
import QuizPage from "./components/QuizPage"
import Loading from "./components/Loading"
import HomePage from "./components/HomePage"
import axios from 'axios'
import { nanoid } from "nanoid";
import './App.css';
import { setSelectionRange } from "@testing-library/user-event/dist/utils"
// https://opentdb.com/api.php?amount=10

function App() {
  const length = 10
  const [started, setStarted] = useState(false)
  const [loading, setLoading] = useState(true)
  const [quizLink, setQuizLink] = useState(`https://opentdb.com/api.php?amount=${length}`)
  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [showAnswers, setShowAnswers] = useState(false)
  const [selected0, setSelected0] = useState("choice")
  const [selected1, setSelected1] = useState("choice")
  const [selected2, setSelected2] = useState("choice")
  const [selected3, setSelected3] = useState("choice")


  useEffect(() =>{
    setLoading(false)
    axios.get(quizLink)
      .then(res => res.data)
      .then(data => {
          const questions = data.results.map((question) => ({
            ...question,
            answers:[question.correct_answer, ...question.incorrect_answers].sort(() => Math.random() - 0.5),
            correctAnswer: question.correct_answer
          }))
        setQuestions(questions)
      });
  },[])

  console.log("questions: ")
  console.log(questions)

  function start_game(){
    setStarted(true)
  }

  function checkAnswer(response, idx){
    if(!showAnswers){
      if (response === questions[currentIndex].correct_answer){
        setScore(prev => prev + 1)
        // setCurrentIndex(prev => prev + 1)
        if (idx === 0){
          setSelected0("correctChoice")
        }
        else if (idx === 1){
          setSelected1("correctChoice")
        }
        else if (idx === 2){
          setSelected2("correctChoice")
        }
        else if (idx === 3){
          setSelected3("correctChoice")
        }
      }
      else{
        if (idx === 0){
          setSelected0("incorrectChoice")
        }
        else if (idx === 1){
          setSelected1("incorrectChoice")
        }
        else if (idx === 2){
          setSelected2("incorrectChoice")
        }
        else if (idx === 3){
          setSelected3("incorrectChoice")
        }
      }
    }
    setShowAnswers(true)
  }

  function handleNextQuestion(){
    setCurrentIndex(prev => prev + 1)
    setShowAnswers(false)
    setSelected0("choice")
    setSelected1("choice")
    setSelected2("choice")
    setSelected3("choice")
  }

  function restart(){
    setQuizLink(quizLink)
    setShowAnswers(false)
    setCurrentIndex(0)
    setSelected0("choice")
    setSelected1("choice")
    setSelected2("choice")
    setSelected3("choice")
  }

  if (loading) return <Loading />
  return (
    <div className = "quiz-container">
      {started ? (currentIndex < questions.length ? 
                <QuizPage
                  id = {nanoid()}
                  checkAnswer = {checkAnswer}
                  handleNextQuestion = {handleNextQuestion}
                  question = {questions[currentIndex]}
                  showAnswers = {showAnswers}
                  selected0 = {selected0}
                  selected1 = {selected1}
                  show4 = {questions[currentIndex].answers.length>2}
                  selected2 = {selected2}
                  selected3 = {selected3}
                  restart = {restart}
                /> : (<div className = "gameOver">
                      {`Congrats you finished the Quiz! you scored: ${score}`}
                      <button onClick = {restart}>Try Again!</button>
                    </div>))
               : <HomePage 
                  // started = {started}
                  start_game = {start_game}
                  />} 
    </div>
  );
}

export default App;
