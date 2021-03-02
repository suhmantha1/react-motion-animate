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
            rel='noopener noreferrer'
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
            <div className='intro-arrow'>
              <svg x='0px' y='0px' viewBox='0 0 512 512'>
                <path
                  d='M374.108,373.328c-7.829-7.792-20.492-7.762-28.284,0.067L276,443.557V20c0-11.046-8.954-20-20-20
			c-11.046,0-20,8.954-20,20v423.558l-69.824-70.164c-7.792-7.829-20.455-7.859-28.284-0.067c-7.83,7.793-7.859,20.456-0.068,28.285
			l104,104.504c0.006,0.007,0.013,0.012,0.019,0.018c7.792,7.809,20.496,7.834,28.314,0.001c0.006-0.007,0.013-0.012,0.019-0.018
			l104-104.504C381.966,393.785,381.939,381.121,374.108,373.328z'
                />
              </svg>
            </div>

            <div className='block'>
              <MotionAnimate reset={true}>
                <div>
                  <div>Just a simple fade</div>
                </div>

                <pre>
                  <code>
                    {`
                      <MotionAnimate reset={true}>
                        <>Just a simple fade</>
                      </MotionAnimate>
                    `}
                  </code>
                </pre>
              </MotionAnimate>
            </div>

            <div className='block'>
              <MotionAnimate animation='fadeInUp' reset={true}>
                <div>
                  <div>Animate up a little....</div>

                  <pre>
                    <code>
                      {`
                      <MotionAnimate animation='fadeInUp' reset={true}>
                        <>Animate up a little....</>
                      </MotionAnimate>
                    `}
                    </code>
                  </pre>
                </div>
              </MotionAnimate>
              <MotionAnimate
                animation='fadeInUp'
                reset={true}
                distance={200}
                delay={1}
                speed={1}
              >
                <div className='right mt'>Or animate up a lot</div>

                <pre>
                  <code>
                    {`
                      <MotionAnimate
                        animation='fadeInUp'
                        reset={true}
                        distance={200}
                        delay={1}
                        speed={1}>
                        <>Or animate up a lot</>
                      </MotionAnimate>
                    `}
                  </code>
                </pre>
              </MotionAnimate>
            </div>

            <div className='block'>
              <div className='inner'>
                <MotionAnimate
                  delay={0.4}
                  speed={2}
                  ease={[0.75, 0.45, 0.53, 0.94]}
                  reset={true}
                >
                  <div>
                    <div>add in some custom easing</div>

                    <pre>
                      <code>
                        {`
                        <MotionAnimate
                          delay={0.4}
                          speed={2}
                          ease={[0.75, 0.45, 0.53, 0.94]}
                          reset={true}>
                          <>Animate up a little....</>
                        </MotionAnimate>
                      `}
                      </code>
                    </pre>
                  </div>
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
                <MotionAnimate>
                  <div style={{ textAlign: 'left' }}>
                    <pre>
                      <code>
                        {`
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
                          }}>
                          <>or do your own weird thing</>
                        </MotionAnimate>
                      `}
                      </code>
                    </pre>
                  </div>
                </MotionAnimate>
              </div>
            </div>
          </div>

          <div className='scroll-block' style={{ background: '#57716F' }}>
            <div className='inner'>
              <MotionAnimate animation='scrollOpacity'>
                <div>
                  <div>Fade in and out on scroll</div>
                  <pre>
                    <code>
                      {`
                      <MotionAnimate animation='scrollOpacity'>
                        <div>Fade in and out on scroll</div>
                      </MotionAnimate>
                      `}
                    </code>
                  </pre>
                </div>
              </MotionAnimate>

              <div style={{ paddingTop: '50vh' }}>
                <MotionAnimate
                  animation='scrollOpacity'
                  ease={[0.17, 0.67, 0.97, -0.48]}
                  scrollPositions={[0.2, 0.5, 0.6, 0.8]}
                >
                  <div>
                    <div style={{ textAlign: 'center', paddingBottom: '40px' }}>
                      Define your own scroll opacity trigger positions and
                      easing
                    </div>
                    <img
                      src='images/scroll-opacity.jpg'
                      alt="the world's most beautiful black cat"
                    />
                    <pre>
                      <code>
                        {`
                        <MotionAnimate
                          animation='scrollOpacity'
                          ease={[0.17, 0.67, 0.97, -0.48]}
                          scrollPositions={[0.2, 0.5, 0.6, 0.8]}>
                          <div>Define your own scroll opacity trigger positions and easing</div>
                        </MotionAnimate>
                      `}
                      </code>
                    </pre>
                  </div>
                </MotionAnimate>
              </div>
            </div>
          </div>

          <div className='scroll-block' style={{ background: '#EBDDA3' }}>
            <div className='inner'>
              <MotionAnimate animation='scrollFadeIn'>
                <div>Fade In (only) With Scroll</div>

                <pre>
                  <code>
                    {`
                      <MotionAnimate animation='scrollFadeIn'>
                        <div>Fade In (only) With Scroll</div>
                      </MotionAnimate>
                    `}
                  </code>
                </pre>
              </MotionAnimate>

              <MotionAnimate
                animation='scrollFadeIn'
                scrollPositions={[0.1, 0.9]}
              >
                <div className='right' style={{ marginTop: '50vh' }}>
                  Fade in slow...
                </div>

                <pre>
                  <code>
                    {`
                      <MotionAnimate animation='scrollFadeIn' scrollPositions={[0.1, 0.9]}>
                        <div>Fade in slow...</div>
                      </MotionAnimate>
                    `}
                  </code>
                </pre>
              </MotionAnimate>

              <MotionAnimate animation='scrollFadeOut'>
                <div className='center' style={{ marginTop: '50vh' }}>
                  Or just fade out instead
                </div>

                <pre>
                  <code>
                    {`
                      <MotionAnimate animation='scrollFadeOut'>
                        <div>Or just fade out instead</div>
                      </MotionAnimate>
                    `}
                  </code>
                </pre>
              </MotionAnimate>
            </div>
          </div>

          <div className='scroll-block' style={{ backgroundColor: '#839CAD' }}>
            <div>
              <MotionAnimate animation='scrollPosition' xPos={[1400, -600]}>
                <div>
                  <div>Scroll Position</div>

                  <pre>
                    <code>
                      {`
                      <MotionAnimate animation='scrollPosition' xPos={[1400, -600]}>
                        <div>Scroll Position</div>
                      </MotionAnimate>
                    `}
                    </code>
                  </pre>
                </div>
              </MotionAnimate>
            </div>

            <div style={{ marginTop: '50vh', border: '1px solid pink' }}>
              <MotionAnimate
                animation='scrollPosition'
                scrollPositions={[0.3, 0.6]}
                xPos={[200, 800]}
                yPos={[0, -200]}
              >
                <div>🤾🏼‍♀️</div>
                <pre>
                  <code>
                    {`
                      <MotionAnimate animation='scrollPosition'
                        scrollPositions={[0.4, 0.8]}
                        xPos={[200, 800]}
                        yPos={[0, -200]}>
                        <div>Scroll Position</div>
                      </MotionAnimate>
                    `}
                  </code>
                </pre>
              </MotionAnimate>
            </div>
          </div>
        </main>
      </MotionAnimate>

      <footer>
        <div className='inner'>
          Brought to you by the team at{' '}
          <a
            href='https://useallfive.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Use All Five
          </a>
          <br />
          Built by:{' '}
          <a
            href='https://github.com/suhmantha1'
            target='_blank'
            rel='noopener noreferrer'
          >
            Samantha Combs
          </a>{' '}
          +{' '}
          <a
            href='https://github.com/supryan'
            target='_blank'
            rel='noopener noreferrer'
          >
            Ryan Gordon
          </a>
        </div>
      </footer>
    </>
  )
}

export default App
