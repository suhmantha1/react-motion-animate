import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useIntersect } from './hooks'

// Use this context in other components if you need
// Example Hook Usage: const { inView } = useContext(IntersectionContext);
export const IntersectionContext = React.createContext({ inView: true })

export const IntersectionObserver = ({
  children,
  reset = false, // if value set to true - observed element will reappear every time it shows up on the screen
  onInView // Function for use in <MotionDrizzle /> because context can't be directly accessed
}) => {
  const [inView, setInView] = useState(false)
  const [ref, entry] = useIntersect({
    threshold: 0
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
  children: PropTypes.any,
  reset: PropTypes.bool,
  onInView: PropTypes.func
}
