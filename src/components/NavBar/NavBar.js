import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return(
    <nav className='nav-bar'>
    <NavLink to='/'>
      <button>Home</button>
    </NavLink>
    <NavLink to='/favorites'>
      <button className='favorites'>Favorites</button>
    </NavLink>
  </nav>
  )
}

export default NavBar