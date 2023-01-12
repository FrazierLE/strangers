import React from 'react'
import './LevelOne.css'

const LevelOne = (props) => {
  console.log('LEVEL ONE PROPS')
  return (
    <div className='level-card'>
      <h4 className='randomQuestion'>{props.randomQuestion.question}</h4>
      <button onClick={() => props.one()} className='level-button'>Next Question</button>
      <button onClick={() => props.addToFavorites(props.randomQuestion)} className='level-button'>Save Question</button>
    </div>
  )
}

export default LevelOne