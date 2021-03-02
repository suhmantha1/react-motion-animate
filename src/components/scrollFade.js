import React, { useRef, useState, useEffect } from 'react'
import { useViewportScroll, useTransform, motion } from 'framer-motion'
import PropTypes from 'prop-types'
import { getStartScrollPos } from '../utils/scroll'

export const ScrollFade = ({
  children,
  scrollPositions = [0, 0.4],
  isFadeIn = true,
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
        startPercentile: scrollPositions[0],
        endPercentile: scrollPositions[1]
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
    isFadeIn ? [0, 1] : [1, 0],
    ease
  )

  return (
    <motion.div ref={ref} style={{ opacity }}>
      {children}
    </motion.div>
  )
}

ScrollFade.propTypes = {
  children: PropTypes.node,
  scrollPositions: PropTypes.arrayOf(PropTypes.number),
  ease: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.number)
  ])
}
