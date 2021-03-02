import React, { useRef, useState, useEffect } from 'react'
import { useViewportScroll, useTransform, motion } from 'framer-motion'
import PropTypes from 'prop-types'
import { getStartScrollPos } from '../utils/scroll'

export const ScrollFadeIn = ({
  children,
  opacityPositions = [0, 0.4],
  ease
}) => {
  const { scrollY } = useViewportScroll()
  const ref = useRef()
  const [startPosition, setStartPosition] = useState(0)
  const [visiblePosition, setVisiblePosition] = useState(0)

  useEffect(() => {
    if (!ref.current) return

    const setValues = () => {
      const $ref = ref.current

      // Get animation positions
      const positions = getStartScrollPos({
        $ref,
        startPercentile: opacityPositions[0],
        endPercentile: opacityPositions[1]
      })

      setStartPosition(positions.startPos)
      setVisiblePosition(positions.endPos)
    }

    setValues()
    window.addEventListener('load', setValues)
    window.addEventListener('resize', setValues)

    return () => {
      window.removeEventListener('load', setValues)
      window.removeEventListener('resize', setValues)
    }
  }, [ref])

  const opacity = useTransform(
    scrollY,
    [startPosition, visiblePosition],
    [0, 1],
    ease
  )

  return (
    <motion.div ref={ref} style={{ opacity }}>
      {children}
    </motion.div>
  )
}

ScrollFadeIn.propTypes = {
  children: PropTypes.node,
  opacityPositions: PropTypes.arrayOf(PropTypes.number),
  ease: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.number)
  ])
}
