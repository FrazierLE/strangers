import React from 'react'
import './LevelThree.css'

const LevelThree = (props) => {
  return (
    <div className='level-card'>
      <h4 className='randomQuestion'>{props.randomQuestion.question}</h4>
      <button onClick={() => props.three()}>Next Question</button>
      <button onClick={() => props.addToFavorites(props.randomQuestion)}>Save Question</button>
    </div>
  )
}

export default LevelThree

