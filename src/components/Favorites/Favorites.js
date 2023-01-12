import React from 'react'
import Card from '../Card/Card'
import './Favorites.css'

const Favorites = ({ favorites, deleteFromFavorites }) => {
    const favCards = favorites.map(card => {
      return (
        <Card 
          key={card.id}
          id={card.id}
          question={card.question}
          level={card.level}
          deleteFromFavorites={deleteFromFavorites}
        />
      )
    })
  return (
    <div className='deck'>
      {!favorites.length ? <h2>Sorry, you have no cards saved to your deck.</h2> : <div>{favCards}</div>}
    </div>
  )
}

export default Favorites