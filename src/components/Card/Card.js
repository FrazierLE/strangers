import React from 'react'
import './Card.css'

const Card = ({ id, question, level }) => {
  return (
    <div className='favorite-card'>
      <h3>{question}</h3>
      <span>Level {level}</span>
    </div>
  )
}

export default Card