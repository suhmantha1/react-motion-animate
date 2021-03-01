import React from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import { getAnimation } from '../utils/animation'
import { transition } from '../constants/animations'

export const RevealTransition = ({
  children,
  animation,
  inView,
  variant,
  speed,
  delay,
  distance,
  ease
}) => {
  const animationVariants = getAnimation({ animation, variant, distance })

  return (
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
  )
}

RevealTransition.propTypes = {
  children: PropTypes.node,
  animation: PropTypes.oneOf(['fade', 'fadeInUp', 'fadeInDown']),
  inView: PropTypes.bool,
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
  ])
}
