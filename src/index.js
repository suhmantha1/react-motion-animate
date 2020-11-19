import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { IntersectionObserver } from './utils/intersection-observer'
import variants, { transition } from './constants/animations'

export const MotionAnimate = ({
  children,
  animation = 'fade',
  speed = transition.duration,
  delay = transition.delay,
  distance = transition.distance, // TODO
  ease = transition.ease,
  reset = true,
  threshold = 0
}) => {
  const [inView, setInView] = useState(false)

  return (
    <IntersectionObserver
      onInView={(status) => setInView(status)}
      reset={reset}
      threshold={threshold}
    >
      <motion.div
        initial='hidden'
        animate={inView ? 'show' : 'hidden'}
        exit='hidden'
        variants={variants[animation]}
        transition={{
          ...transition,
          duration: speed,
          delay: delay,
          ease: ease
        }}
      >
        {children}
      </motion.div>
    </IntersectionObserver>
  )
}

MotionAnimate.propTypes = {
  children: PropTypes.node,
  animation: PropTypes.oneOf(['fade', 'fadeInUp', 'fadeInDown']),
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
