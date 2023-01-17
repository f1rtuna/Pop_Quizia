import React from 'react'
import Quiz from "./Quiz"

export default function QuizPage({questions}) {

  function decodeString(str) {
    const textArea = document.createElement('textarea')
    textArea.innerHTML= str
    return textArea.value
  }

  const quizElements = questions.map(question => {

    return <Quiz 
            key={question.id}
            id={question.id}
            question={question.question}
            correctAnswer={question.correct_answer}
            incorrectAnswers={question.incorrect_answers}
            // difficulty={question.difficulty}
            // category={question.category}
            // selectedAnswer={question.selectedAnswer}
            // showAnswer={question.showAnswer}
            // handleSelectAnswer={handleSelectAnswer}
            decodeString = {decodeString}
            />

  })

  console.log(quizElements)
  
  return (
    <div className = "quiz-container">
      {quizElements}
    </div>
        
    
  )
}
