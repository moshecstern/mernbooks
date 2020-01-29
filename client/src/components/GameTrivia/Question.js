import React from 'react'

export default function Question({ question, right, wrong, handleClick }) {

  function mix() {
    let possibleAnswers = wrong
    possibleAnswers.splice(Math.floor(Math.random() * 4), 0, right)
    return possibleAnswers
  }
  let allAnswers = mix()

  function QuestionGrid(props) {
    const question = props.question
    const answers = props.allAnswers
    const listAnswers = answers.map((answer, index) =>
      <button
        className="answerCard"
        key={index}
        onClick={handleClick}
      >
        {answer}
      </button>
    )
    return (
      <React.Fragment>
        <div className="question">{question}</div>
        <div className="list">{listAnswers}</div>
      </React.Fragment>
    )
  }

  return (
    <QuestionGrid
      question={question}
      allAnswers={allAnswers}
    />
  )
}