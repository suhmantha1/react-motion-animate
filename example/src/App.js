import React from 'react'

import { MotionAnimate } from 'react-motion-animate'
import 'react-motion-animate/dist/index.css'

const App = () => {
  return (
    <>
      <div className='block blue'>
        <div className='inner'>
          <MotionAnimate animation='fadeInUp'>FADE UP</MotionAnimate>
        </div>
      </div>

      <div className='block pink'>
        <div className='inner'>
          <MotionAnimate>FADE IN</MotionAnimate>
        </div>
      </div>

      <div className='block green'>
        <div className='inner'>
          <MotionAnimate animation='fadeInDown'>FADE DOWN</MotionAnimate>
        </div>
      </div>
    </>
  )
}

export default App
