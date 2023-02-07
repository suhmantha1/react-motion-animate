import React, { useRef, useState, useEffect } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import PropTypes from 'prop-types'
import { getStartScrollPos } from '../utils/scroll'

export const ScrollPosition = ({
  children,
  scrollPositions = [0, 1],
  xPos = [0, 0],
  yPos = [0, 0],
  ease
}) => {
  const { scrollY } = useScroll()
  const ref = useRef()
  const [startPosition, setStartPosition] = useState(0)
  const [endPosition, setEndPosition] = useState(0)

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

  const x = useTransform(scrollY, [startPosition, endPosition], xPos, ease)
  const y = useTransform(scrollY, [startPosition, endPosition], yPos, ease)

  return (
    <motion.div ref={ref} style={{ x, y }}>
      {children}
    </motion.div>
  )
}

ScrollPosition.propTypes = {
  children: PropTypes.node,
  ease: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.number)
  ])
}
