import React, { useRef, useState, useEffect } from 'react'
import { useViewportScroll, useTransform, motion } from 'framer-motion'
import PropTypes from 'prop-types'

export const ScrollOpacity = ({ children, yOffset = 0, ease }) => {
  const { scrollY } = useViewportScroll()
  const ref = useRef()
  const [startPosition, setStartPosition] = useState(0)
  const [visibleStartPosition, setVisibleStartPosition] = useState(0)
  const [visibleEndPosition, setVisibleEndPosition] = useState(0)
  const [endPosition, setEndPosition] = useState(0)

  useEffect(() => {
    if (!ref.current) return

    const setValues = () => {
      const $ref = ref.current
      const topEntersWindowPosition = $ref.offsetTop - window.innerHeight / 2

      // Start fading in when top of element is 10% above the viewport
      setStartPosition(topEntersWindowPosition + window.innerHeight * 0.1)

      // Totally visible from element top 25% above fold – bottom 10% from window top
      setVisibleStartPosition(
        topEntersWindowPosition + window.innerHeight * 0.25
      )
      setVisibleEndPosition(topEntersWindowPosition + window.innerHeight * 0.75)

      // Fade out again when element bottom reaches 10% from window top
      setEndPosition(
        topEntersWindowPosition + $ref.offsetHeight + window.innerHeight * 0.9
      )
    }

    setValues()
    document.addEventListener('load', setValues)
    window.addEventListener('resize', setValues)

    return () => {
      document.removeEventListener('load', setValues)
      window.removeEventListener('resize', setValues)
    }
  }, [ref])

  const opacity = useTransform(
    scrollY,
    [startPosition, visibleStartPosition, visibleEndPosition, endPosition],
    [0, 1, 1, 0],
    ease
  )
  console.log([
    startPosition,
    visibleStartPosition,
    visibleEndPosition,
    endPosition
  ])

  return (
    <motion.div ref={ref} initial={{ opacity: 0 }} style={{ opacity }}>
      {children}
    </motion.div>
  )
}

ScrollOpacity.propTypes = {
  children: PropTypes.node,
  yOffset: PropTypes.number,
  ease: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.number)
  ])
}
