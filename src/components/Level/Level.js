import React from 'react'
import { NavLink } from 'react-router-dom'
import './Level.css'
import PropTypes from 'prop-types'

const Level = (props) => {
  return (
    <div className='level-card'>
      {props.location.pathname === '/one' && 
          <div className='change-levels'>
            <NavLink to='/two'><button onClick={() => props.two()}>Level Two</button></NavLink>
            <NavLink to='/three'><button onClick={() => props.three()}>Level Three</button></NavLink>
          </div>}
      {props.location.pathname === '/two' && 
          <div className='change-levels'>
            <NavLink to='/one'><button onClick={() => props.one()}>Level One</button></NavLink>
            <NavLink to='/three'><button onClick={() => props.three()}>Level Three</button></NavLink>
          </div>}
      {props.location.pathname === '/three' && 
          <div className='change-levels'>
            <NavLink to='/one'><button onClick={() => props.one()}>Level One</button></NavLink>
            <NavLink to='/two'><button onClick={() => props.two()}>Level Two</button></NavLink>
          </div>}
      <h4 className='randomQuestion'>{props.randomQuestion.question}</h4>
      <div className='buttons'>
        {props.randomQuestion.level === 1 && <button  onClick={() => props.one()} className='level-button'>Next Question</button>}
        {props.randomQuestion.level === 2 && <button  onClick={() => props.two()} className='level-button'>Next Question</button>}
        {props.randomQuestion.level === 3 && <button  onClick={() => props.three()} className='level-button'>Next Question</button>}
        <button onClick={() => props.addToFavorites(props.randomQuestion)} className='level-button'>Save Question</button>
      </div>
    </div>
  )
}

export default Level

Level.propTypes = {
  level: PropTypes.array,
  randomQuestion: PropTypes.any,
  three: PropTypes.func,
  addToFavorites: PropTypes.func,
  location: PropTypes.object
}

