import React from 'react'
import './LevelOne.css'

const LevelOne = (levelOne) => {
  return (
    <div className='level-card'>
      <h4 className='randomQuestion'>{levelOne.levelOne}</h4>
    </div>
  )
}

export default LevelOne