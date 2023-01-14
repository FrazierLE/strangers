import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
import PropTypes from 'prop-types'

const NavBar = (props) => {
  return(
    <nav className='nav-bar'>
      {props.location.pathname === '/' && 
      <div className='nav-bar'>
        <NavLink to='/favorites'>
          <button className='favorites'>Favorites ({props.favorites.length})</button>
        </NavLink>
      </div> }
      {props.location.pathname === '/favorites' && 
      <div className='nav-bar'>
        <NavLink to='/'>
          <button>Home</button>
        </NavLink> 
      </div>}
    {(props.location.pathname === '/one' || props.location.pathname === '/two' || props.location.pathname === '/three') && 
      <div className='nav-bar'>
        <NavLink to='/'>
          <button>Home</button>
        </NavLink>
        <NavLink to='/favorites'>
          <button className='favorites'>Favorites ({props.favorites.length})</button>
        </NavLink>
      </div>}
  </nav>
  )
}

export default NavBar

NavBar.propTypes = {
  favorites: PropTypes.array,
  location: PropTypes.object
}
