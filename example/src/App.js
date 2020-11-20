import React from 'react'

import { MotionAnimate } from 'react-motion-animate'
import 'react-motion-animate/dist/index.css'

const App = () => {
  return (
    <>
      <div className='block blue'>
        <div className='inner'>
          <MotionAnimate animation='fadeInUp'>FADE UP</MotionAnimate>
          <MotionAnimate animation='fadeInUp' distance={200} delay={0.4}>
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
          <MotionAnimate animation='fadeInDown' delay={0.4} distance={200}>
            <>FADE DOWN FAR</>
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
          <MotionAnimate threshold={0.5}>
            <div className='threshold'>CUSTOM THRESHOLD 50%</div>
          </MotionAnimate>
          <MotionAnimate threshold={1.0}>
            <div className='threshold'>CUSTOM THRESHOLD 100%</div>
          </MotionAnimate>
        </div>
      </div>
    </>
  )
}

export default App
