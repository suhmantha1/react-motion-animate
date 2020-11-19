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
  reset = true
}) => {
  const [inView, setInView] = useState(false)

  return (
    <IntersectionObserver
      onInView={(status) => setInView(status)}
      reset={reset}
    >
      <motion.div
        initial='hidden'
        animate={inView ? 'show' : 'hidden'}
        exit='hidden'
        variants={variants[animation]}
        transition={{
          ...transition,
          duration: speed,
          delay: delay
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
  reset: PropTypes.bool
}
