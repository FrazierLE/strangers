import React from 'react'

const LevelThree = (randomQuestion) => {
  return (
    <div className='level-card'>
      <h4 className='randomQuestion'>{randomQuestion.randomQuestion.question}</h4>
      <button onClick={() => randomQuestion.three()}>Next Question</button>
    </div>
  )
}

export default LevelThree

