import React from 'react'
import './Card.css'

const Card = ({ id, question, level }) => {
  return (
    <div className='favorite-card'>
      <h3>{question}</h3>
      <p>Level {level}</p>
    </div>
  )
}

export default Card