import React from 'react'
import Card from '../Card/Card'

const Favorites = (props) => {
    const favCards = props.favorites.map(card => {
      return (
        <Card 
          key={card.id}
          id={card.id}
          question={card.question}
          level={card.level}
        />
      )
    })
  return (
    <div className='deck'>
      {favCards}
    </div>
  )
}

export default Favorites