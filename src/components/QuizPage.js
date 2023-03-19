export default function QuizPage({question, checkAnswer}){
  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
      return array;
  }
  let allAnswers = question.incorrect_answers
  allAnswers.push(question.correct_answer)
  allAnswers = shuffle(allAnswers)

  return (
    <div className="question-container">
      <div className="questionTitle">
        <h1 dangerouslySetInnerHTML={{__html:question.question}}></h1>
      </div>
      <div className="choicesList">
        <button className = "choice" onClick = {() => checkAnswer(allAnswers[0])} dangerouslySetInnerHTML={{__html:allAnswers[0]}}></button>
        <button className = "choice" onClick = {() => checkAnswer(allAnswers[1])} dangerouslySetInnerHTML={{__html:allAnswers[1]}}></button>
        <button className = "choice" onClick = {() => checkAnswer(allAnswers[2])} dangerouslySetInnerHTML={{__html:allAnswers[2]}}></button>
        <button className = "choice" onClick = {() => checkAnswer(allAnswers[3])} dangerouslySetInnerHTML={{__html:allAnswers[3]}}></button>
      </div>
    </div>
  )
}