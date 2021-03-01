import React from 'react'
import { MotionAnimate } from 'react-motion-animate'
import 'react-motion-animate/dist/index.css'

const App = () => {
  return (
    <>
      <header>
        <nav>
          <a
            target='_blank'
            href='https://github.com/suhmantha1/react-motion-animate/blob/master/README.md'
          >
            Docs
          </a>
        </nav>

        <MotionAnimate speed={1}>
          <h1>React Motion Animate</h1>
        </MotionAnimate>
        <MotionAnimate delay={0.4} speed={1}>
          <h2>Animate react components as they scroll in and out of view</h2>
        </MotionAnimate>
      </header>

      <MotionAnimate animation='fadeInUp' delay={1}>
        <main>
          <div className='inner'>
            <div className='block'>
              <MotionAnimate threshold={1} reset={true}>
                <>Just a simple fade</>
              </MotionAnimate>
            </div>

            <div className='block'>
              <MotionAnimate animation='fadeInUp' reset={true}>
                <>Animate up a little....</>
              </MotionAnimate>
              <MotionAnimate
                animation='fadeInUp'
                reset={true}
                distance={200}
                delay={1}
                speed={1}
              >
                <div className='right mt'>Or animate up a lot</div>
              </MotionAnimate>
            </div>

            <div className='block'>
              <div className='inner'>
                <MotionAnimate animation='fadeInDown' reset={true}>
                  <>Animate down</>
                </MotionAnimate>
                <MotionAnimate
                  animation='fadeInDown'
                  delay={0.4}
                  speed={1}
                  distance={200}
                  reset={true}
                >
                  <div className='right mt'>Or animate really far down</div>
                </MotionAnimate>
              </div>
            </div>

            <div className='block'>
              <div className='inner'>
                <MotionAnimate
                  delay={0.4}
                  speed={2}
                  ease={[0.75, 0.45, 0.53, 0.94]}
                  reset={true}
                >
                  <>add in some custom easing</>
                </MotionAnimate>
              </div>
            </div>

            <div className='block'>
              <div className='inner center'>
                <MotionAnimate
                  variant={{
                    hidden: { opacity: 0.2, rotate: -180 },
                    show: {
                      opacity: 0.8,
                      rotate: 0,
                      transition: {
                        repeat: Infinity,
                        duration: 4,
                        repeatDelay: 1,
                        type: 'spring'
                      }
                    }
                  }}
                >
                  <>or do your own weird thing</>
                </MotionAnimate>
              </div>
            </div>
          </div>

          <div className='scroll-block' style={{ background: '#57716F' }}>
            <div className='inner'>
              <MotionAnimate animation='scrollOpacity'>
                <>Fade in and out on scroll</>
              </MotionAnimate>

              <div style={{ paddingTop: '50vh' }}>
                <MotionAnimate
                  animation='scrollOpacity'
                  ease={[0.17, 0.67, 0.97, -0.48]}
                  opacityPositions={[0, 0.5, 0.6, 1]}
                >
                  <div>
                    <div style={{ textAlign: 'center', paddingBottom: '40px' }}>
                      Define your own scroll opacity trigger positions and
                      easing
                    </div>
                    <img
                      src='/images/scroll-opacity.jpg'
                      alt="the world's most beautiful black cat"
                    />
                  </div>
                </MotionAnimate>
              </div>
            </div>
          </div>
        </main>
      </MotionAnimate>

      <footer>
        <div className='inner'>
          Brought to you by the team at{' '}
          <a href='https://useallfive.com/' target='_blank'>
            Use All Five
          </a>
          <br />
          Built by:{' '}
          <a href='https://github.com/suhmantha1' target='_blank'>
            Samantha Combs
          </a>{' '}
          +{' '}
          <a href='https://github.com/supryan' target='_blank'>
            Ryan Gordon
          </a>
        </div>
      </footer>
    </>
  )
}

export default App
