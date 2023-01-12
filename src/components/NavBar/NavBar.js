import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = (props) => {
  console.log('NAV', props)
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