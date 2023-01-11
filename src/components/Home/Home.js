import React from 'react'
import './Home.css'
import { NavLink } from 'react-router-dom'
import LevelOne from '../LevelOne/LevelOne' 
import LevelTwo from '../LevelTwo/LevelTwo'
import LevelThree from '../LevelThree/LevelThree'

const Home = (questions) => {
  // console.log('HOME PROPS', questions)

  return (
    <div className='levels'>
      <NavLink to='/one' className='navLink'>
        <div className='level-one home-card' >
          <h3>Level 1</h3>
          <span>Perception</span>
        </div>
      </NavLink>
      <NavLink to='/two' className='navLink'>
        <div className='level-two home-card'>
          <h3>Level 2</h3>
          <span>Connection</span>
        </div>
      </NavLink>
      <NavLink to='/three' className='navLink'>
        <div className='level-three home-card'>
          <h3>Level 3</h3>
          <span>Reflection</span>
        </div>
      </NavLink>
    </div>
  )

}

export default Home