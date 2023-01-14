import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const Error = (props) => {
  if(!props.error) {
    return (
        <div>
          <h1 className='status'>404</h1>
          <h2 style={{fontSize: "2rem"}}>Page not found.</h2>
          <NavLink to='/'>
            <button>Home</button>
          </NavLink>
        </div>
    )}
    return (
        <h2 className='error-message'>{props.error}</h2>
    )
}

export default Error


Error.propTypes = {
  props: PropTypes.object
}