import React from 'react'
import './LevelOne.css'

const Level = (props) => {
  return (
    <div className='level-card'>
      <h4 className='randomQuestion'>{props.randomQuestion.question}</h4>
      {props.randomQuestion.level === 1 && <button  onClick={() => props.one()} className='level-button'>Next Question</button>}
      {props.randomQuestion.level === 2 && <button  onClick={() => props.two()} className='level-button'>Next Question</button>}
      {props.randomQuestion.level === 3 && <button  onClick={() => props.three()} className='level-button'>Next Question</button>}
      <button onClick={() => props.addToFavorites(props.randomQuestion)} className='level-button'>Save Question</button>
    </div>
  )
}

export default Level