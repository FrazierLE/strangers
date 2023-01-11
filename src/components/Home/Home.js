import React from 'react'
import './Home.css'

const Home = (questions) => {
  // console.log('HOME PROPS', questions)

  return (
    <div className='levels'>
      <div className='level-one home-card'>
        <h3>Level 1</h3>
        <span>Perception</span>
      </div>
      <div className='level-two home-card'>
        <h3>Level 2</h3>
        <span>Connection</span>
      </div>
      <div className='level-three home-card'>
        <h3>Level 3</h3>
        <span>Reflection</span>
      </div>
    </div>
  )

}

export default Home