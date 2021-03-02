import React, { useRef, useState, useEffect } from 'react'
import { useViewportScroll, useTransform, motion } from 'framer-motion'
import PropTypes from 'prop-types'

export const ScrollOpacity = ({
  children,
  opacityPositions = [0, 0.4, 0.6, 1],
  ease
}) => {
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

      // const topEntersWindowPosition = $ref.offsetTop - window.innerHeight / 2
      const topEntersWindowPosition =
        window.pageYOffset +
        $ref.getBoundingClientRect().top -
        window.innerHeight

      const bottomEntersWindowPosition =
        topEntersWindowPosition + $ref.offsetHeight

      // Start fading in when top of element is above the viewport
      setStartPosition(
        topEntersWindowPosition + window.innerHeight * opacityPositions[0]
      )

      // Totally visible from element top 40% above fold – bottom 60% from window top
      setVisibleStartPosition(
        topEntersWindowPosition + window.innerHeight * opacityPositions[1]
      )
      setVisibleEndPosition(
        bottomEntersWindowPosition + window.innerHeight * opacityPositions[2]
      )

      // Fade out again when element bottom reaches 10% from window top
      setEndPosition(
        bottomEntersWindowPosition + window.innerHeight * opacityPositions[3]
      )
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
    <motion.div ref={ref} initial={{ opacity: 0 }} style={{ opacity }}>
      {children}
    </motion.div>
  )
}

ScrollOpacity.propTypes = {
  children: PropTypes.node,
  opacityPositions: PropTypes.arrayOf(PropTypes.number),
  ease: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.number)
  ])
}
