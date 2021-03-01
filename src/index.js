import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { IntersectionObserver } from './utils/intersection-observer'
import { transition } from './constants/animations'
import { RevealTransition } from './components/RevealTransition'
import { ScrollOpacity } from './components/scrollOpacity'

export const MotionAnimate = ({
  children,
  animation = 'fade',
  variant,
  speed = transition.duration,
  delay = transition.delay,
  distance,
  ease = transition.ease,
  reset = false,
  threshold = 0,
  opacityPositions
}) => {
  const [inView, setInView] = useState(false)

  const isRevealAnimation =
    ['fade', 'fadeInUp', 'fadeInDown'].includes(animation) || variant

  return (
    <IntersectionObserver
      onInView={(status) => setInView(status)}
      reset={reset}
      threshold={threshold}
    >
      {animation === 'scrollOpacity' && (
        <ScrollOpacity ease={ease} opacityPositions={opacityPositions}>
          {children}
        </ScrollOpacity>
      )}
      {isRevealAnimation && (
        <RevealTransition
          inView={inView}
          animation={animation}
          variant={variant}
          speed={speed}
          delay={delay}
          distance={distance}
          ease={ease}
        >
          {children}
        </RevealTransition>
      )}
    </IntersectionObserver>
  )
}

MotionAnimate.propTypes = {
  children: PropTypes.node,
  animation: PropTypes.oneOf([
    'fade',
    'fadeInUp',
    'fadeInDown',
    'scrollOpacity'
  ]),
  variant: PropTypes.shape({
    hidden: PropTypes.object,
    show: PropTypes.object
  }),
  speed: PropTypes.number,
  delay: PropTypes.number,
  distance: PropTypes.number,
  ease: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.number)
  ]),
  reset: PropTypes.bool,
  threshold: PropTypes.number
}
