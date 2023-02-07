import React, { useRef, useState, useEffect } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import PropTypes from 'prop-types'
import { getFullScrollPos } from '../utils/scroll'

export const ScrollOpacity = ({
  children,
  scrollPositions = [0, 0.4, 0.6, 1],
  ease
}) => {
  const { scrollY } = useScroll()
  const ref = useRef()
  const [startPosition, setStartPosition] = useState(0)
  const [visibleStartPosition, setVisibleStartPosition] = useState(0)
  const [visibleEndPosition, setVisibleEndPosition] = useState(0)
  const [endPosition, setEndPosition] = useState(0)

  useEffect(() => {
    if (!ref.current) return

    const setValues = () => {
      const $ref = ref.current

      // Get animation positions
      const positions = getFullScrollPos({
        $ref,
        startPercentile: scrollPositions[0],
        startFullPercentile: scrollPositions[1],
        endFullPercentile: scrollPositions[2],
        endPercentile: scrollPositions[3]
      })
      setStartPosition(positions.startPos)
      setVisibleStartPosition(positions.startFullPos)
      setVisibleEndPosition(positions.endFullPos)
      setEndPosition(positions.endPos)
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
    [startPosition, visibleStartPosition, visibleEndPosition, endPosition],
    [0, 1, 1, 0],
    ease
  )

  return (
    <motion.div ref={ref} style={{ opacity }}>
      {children}
    </motion.div>
  )
}

ScrollOpacity.propTypes = {
  children: PropTypes.node,
  scrollPositions: PropTypes.arrayOf(PropTypes.number),
  ease: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.number)
  ])
}
