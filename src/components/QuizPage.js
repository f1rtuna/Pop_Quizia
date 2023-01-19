import React from 'react'
import Quiz from "./Quiz"

export default function QuizPage({questions}) {
  console.log(questions)
  function decodeString(str) {
    const textArea = document.createElement('textarea')
    textArea.innerHTML= str
    return textArea.value
  }

  function checkAnswer(answer, correct_answer){
    if(answer === correct_answer){
      console.log("correct!")
    }
  }

  const quizElements = questions.map(question => {
    return <Quiz 
            key={question.id}
            id={question.id}
            question={question.question}
            correctAnswer={question.correct_answer}
            answers={question.answers}
            decodeString = {decodeString}
            checkAnswer = {checkAnswer}
            />

  })

  console.log(quizElements)
  
  return (
    <div className = "quiz-boxes">
      {quizElements}
    </div>
        
    
  )
}
