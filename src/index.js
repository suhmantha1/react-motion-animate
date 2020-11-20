import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { IntersectionObserver } from './utils/intersection-observer'
import { transition } from './constants/animations'
import { getAnimation } from './utils/animation'

export const MotionAnimate = ({
  children,
  animation = 'fade',
  speed = transition.duration,
  delay = transition.delay,
  distance,
  ease = transition.ease,
  reset = false,
  threshold = 0
}) => {
  const [inView, setInView] = useState(false)

  const animationVariants = getAnimation({ animation, distance })

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
        variants={animationVariants}
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
