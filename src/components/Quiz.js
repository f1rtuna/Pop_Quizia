import React from 'react'

export default function Quiz({incorrectAnswers, correctAnswer, question, decodeString}) {
    const options = [decodeString(correctAnswer)]
    for (let i = 0; i < incorrectAnswers.length; i++){
      options.push(decodeString(incorrectAnswers[i]))
    }
    // function checkAnswer(){
    //     correct === o.correct ? console.log("correct!") : console.log("nope")
    // }
    console.log(question)
    return (
        <>
            <div>{decodeString(question)}</div>
            {/* <div className = "options">
                {options}
            </div> */}
        </>
        
    )
}
