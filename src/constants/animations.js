export const transition = {
  duration: 0.3,
  delay: 0.2,
  ease: 'easeInOut'
}

const fade = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1
  }
}

const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 40
  },
  show: {
    opacity: 1,
    y: 0
  }
}

const fadeInDown = {
  hidden: {
    opacity: 0,
    y: -40
  },
  show: {
    opacity: 1,
    y: 0
  }
}

export default {
  fade,
  fadeInUp,
  fadeInDown
}
