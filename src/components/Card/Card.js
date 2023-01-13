import React from 'react'
import './Card.css'

const Card = ({ id, question, level, deleteFromFavorites }) => {
  return (
    <div className='favorite-card'>
      <h3>{question}</h3>
      <span>Level {level}</span>
      <button className='delete' onClick={() => deleteFromFavorites(id)}>X</button>
    </div>
  )
}

export default Card