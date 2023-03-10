import React from 'react'
import './Home.css'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import Footer from '../Footer/Footer'

const Home = (props) => {
  return (
    <div>
      <div className='levels'>
        <NavLink to='/one' className='navLink'>
          <div className='level-one home-card' onClick={() => props.one()}>
            <h3>Level 1</h3>
            <span>Perception</span>
          </div>
        </NavLink>
        <NavLink to='/two' className='navLink'>
          <div className='level-two home-card' onClick={() => props.two()}>
            <h3>Level 2</h3>
            <span>Connection</span>
          </div>
        </NavLink>
        <NavLink to='/three' className='navLink'>
          <div className='level-three home-card' onClick={() => props.three()}>
            <h3>Level 3</h3>
            <span>Reflection</span>
          </div>
        </NavLink>
        </div>
      < Footer />
    </div>
  )
}

export default Home

Home.propTypes = {
  one: PropTypes.func,
  two: PropTypes.func,
  three: PropTypes.func
}
