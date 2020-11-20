import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useIntersect } from './hooks'
import { IntersectionContext } from './intersection-context'

export const IntersectionObserver = ({
  children,
  threshold = 0,
  reset = false,
  onInView
}) => {
  const [inView, setInView] = useState(false)
  const [ref, entry] = useIntersect({
    threshold
  })

  useEffect(() => {
    const inViewNow = entry && entry.intersectionRatio > 0

    if (inViewNow) {
      return setInView(inViewNow)
    } else if (reset) {
      return setInView(false)
    }
  }, [entry, reset])

  useEffect(() => {
    return onInView ? onInView(inView) : null
  }, [inView])

  return (
    <IntersectionContext.Provider value={{ inView }}>
      <div ref={ref}>{children}</div>
    </IntersectionContext.Provider>
  )
}

IntersectionObserver.propTypes = {
  children: PropTypes.node,
  threshold: PropTypes.number, // 0 to 1.0 (where 1.0 is 100% visibility threshold)
  reset: PropTypes.bool, // if value set to true - observed element will reappear every time it shows up on the screen
  onInView: PropTypes.func // Function for use in <MotionAnimate /> because context can't be directly accessed
}
