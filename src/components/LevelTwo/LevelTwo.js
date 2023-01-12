import React from 'react'

const LevelTwo = (randomQuestion) => {
  return (
    <div className='level-card'>
      <h4 className='randomQuestion'>{randomQuestion.randomQuestion.question}</h4>
      <button onClick={() => randomQuestion.two()}>Next Question</button>
    </div>
  )
}

export default LevelTwo