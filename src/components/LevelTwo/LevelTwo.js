import React from 'react'
import './LevelTwo.css'

const LevelTwo = (props) => {
  return (
    <div className='level-card'>
       <h4 className='randomQuestion'>{props.randomQuestion.question}</h4>
      <button onClick={() => props.two()}>Next Question</button>
      <button onClick={() => props.addToFavorites(props.randomQuestion)}>Save Question</button>
    </div>
  )
}

export default LevelTwo