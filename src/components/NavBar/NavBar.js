import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
import PropTypes from 'prop-types'

const NavBar = (props) => {
  return(
    <nav className='nav-bar'>
    <NavLink to='/'>
      <button>Home</button>
    </NavLink>
    <NavLink to='/favorites'>
      <button className='favorites'>Favorites ({props.favorites.length})</button>
    </NavLink>
  </nav>
  )
}

export default NavBar

NavBar.propTypes = {
  favorites: PropTypes.array
}

//if on favorites page, then show home button.
//if on level page, then show both buttons
//if on home page, show favorites button