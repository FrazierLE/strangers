import React from 'react'
import './LevelOne.css'

const LevelOne = (randomQuestion) => {
  console.log('LEVEL ONE PROPS', randomQuestion)
  return (
    <div className='level-card'>
      <h4 className='randomQuestion'>{randomQuestion.randomQuestion.question}</h4>
      <button onClick={() => randomQuestion.one()}>Next Question</button>
      <button>Save Question</button>
    </div>
  )
}

export default LevelOne