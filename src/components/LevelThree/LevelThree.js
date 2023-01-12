import React from 'react'

const LevelThree = (randomQuestion) => {
  return (
    <div className='level-card'>
      <h4 className='randomQuestion'>{randomQuestion.randomQuestion}</h4>
    </div>
  )
}

export default LevelThree

