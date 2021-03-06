import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { IntersectionObserver } from './utils/intersection-observer'
import { transition } from './constants/animations'
import { RevealTransition } from './components/RevealTransition'
import { ScrollOpacity } from './components/scrollOpacity'
import { ScrollFade } from './components/scrollFade'
import { ScrollPosition } from './components/scrollPosition'

export const MotionAnimate = ({
  children,
  animation = 'fade',
  variant,
  speed = transition.duration,
  delay = transition.delay,
  distance = transition.distance,
  ease = transition.ease,
  reset = false,
  threshold = 0,
  scrollPositions,
  xPos,
  yPos
}) => {
  const [inView, setInView] = useState(false)

  const isRevealAnimation = ['fade', 'fadeInUp'].includes(animation) || variant

  return (
    <IntersectionObserver
      onInView={(status) => setInView(status)}
      reset={reset}
      threshold={threshold}
    >
      {animation === 'scrollOpacity' && (
        <ScrollOpacity ease={ease} scrollPositions={scrollPositions}>
          {children}
        </ScrollOpacity>
      )}
      {animation === 'scrollFadeIn' && (
        <ScrollFade ease={ease} scrollPositions={scrollPositions}>
          {children}
        </ScrollFade>
      )}
      {animation === 'scrollFadeOut' && (
        <ScrollFade
          ease={ease}
          isFadeIn={false}
          scrollPositions={scrollPositions || [0.7, 1]}
        >
          {children}
        </ScrollFade>
      )}
      {animation === 'scrollPosition' && (
        <ScrollPosition
          ease={ease}
          scrollPositions={scrollPositions}
          xPos={xPos}
          yPos={yPos}
        >
          {children}
        </ScrollPosition>
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
    'scrollOpacity',
    'scrollFadeIn',
    'scrollFadeOut',
    'scrollPosition'
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
