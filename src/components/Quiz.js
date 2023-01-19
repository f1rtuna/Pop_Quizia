import React from 'react'

export default function Quiz({answers, correctAnswer, question, decodeString, checkAnswer}) {
    const answerElements = answers.map(answer => {
        return <button className = "answers" onClick={() => checkAnswer(answer, correctAnswer)}>{decodeString(answer)}</button>
    })
    return (
        <>
            <div className = "question">{decodeString(question)}</div>
            <div className = "options">
                {answerElements}
            </div>
        </>
        
    )
}
