import { all } from "axios"
import React, {useState} from "react"

export default function QuizPage({question, checkAnswer, handleNextQuestion, showAnswers, selected0, selected1, selected2, selected3, handleSelected, show4}){
  
  let allAnswers = question.answers

  // {allAnswers.map((answer,idx) => {
  //   const specialClassName = showAnswers ? (
  //       answer === question.correct_answer ? "green-button": "red-button"
  //   ) : "";
  //   return(
  //       <button className={`normal-button ${specialClassName}`} 
  //       onClick = {() => checkAnswer(answer)}
  //       dangerouslySetInnerHTML={{__html:answer}} />
  //   )
  // })}

  return (
    <div className="question-container">
      <div className="questionTitle">
        <h1 dangerouslySetInnerHTML={{__html:question.question}}></h1>
      </div>
      <div className="choicesList">
        
        <button className = {selected0} onClick = {() => {checkAnswer(allAnswers[0], 0)}} dangerouslySetInnerHTML={{__html:allAnswers[0]}}></button>
        <button className = {selected1} onClick = {() => {checkAnswer(allAnswers[1], 1)}} dangerouslySetInnerHTML={{__html:allAnswers[1]}}></button>
        {show4 &&
          <>
            <button className = {selected2} onClick = {() => {checkAnswer(allAnswers[2], 2)}} dangerouslySetInnerHTML={{__html:allAnswers[2]}}></button>
            <button className = {selected3} onClick = {() => {checkAnswer(allAnswers[3], 3)}} dangerouslySetInnerHTML={{__html:allAnswers[3]}}></button>
          </>
        }
        
      </div>
      <div className = "nextQuestion">
        {showAnswers && <button onClick={handleNextQuestion}>Next Question</button>}
      </div>
    </div>
  )
}