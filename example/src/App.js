import React from 'react'

import { MotionAnimate } from 'react-motion-animate'
import 'react-motion-animate/dist/index.css'

const App = () => {
  return (
    <>
      <div className='block blue'>
        <div className='inner'>
          <MotionAnimate animation='fadeInUp'>FADE UP</MotionAnimate>
          <MotionAnimate animation='fadeInUp' distance={100}>
            <>FADE UP FAR</>
          </MotionAnimate>
        </div>
      </div>

      <div className='block pink'>
        <div className='inner'>
          <MotionAnimate>
            <>FADE IN</>
          </MotionAnimate>
        </div>
      </div>

      <div className='block green'>
        <div className='inner'>
          <MotionAnimate animation='fadeInDown'>
            <>FADE DOWN</>
          </MotionAnimate>
        </div>
      </div>

      <div className='block blue'>
        <div className='inner'>
          <MotionAnimate speed={2} ease={[0.75, 0.45, 0.53, 0.94]}>
            <>CUSTOM EASE</>
          </MotionAnimate>
          <MotionAnimate delay={0.4} speed={2} ease={'anticipate'}>
            <>MORE CUSTOM EASE</>
          </MotionAnimate>
        </div>
      </div>

      <div className='block pink'>
        <div className='inner'>
          <MotionAnimate threshold={1.0}>
            <div className='threshold'>CUSTOM THRESHOLD</div>
          </MotionAnimate>
        </div>
      </div>
    </>
  )
}

export default App
