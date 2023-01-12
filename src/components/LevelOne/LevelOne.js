import React from 'react'
import './LevelOne.css'

const LevelOne = (randomQuestion) => {
  return (
    <div className='level-card'>
      <h4 className='randomQuestion'>{randomQuestion.randomQuestion}</h4>
      <button>Next Question</button>
    </div>
  )
}

export default LevelOne