import variants from '../constants/animations'

export const getAnimation = ({ animation, variant, distance }) => {
  const animationVariant = variant || variants[animation]

  if (!animationVariant || !animationVariant.hidden) return animationVariant

  // Override distance
  if (distance) {
    if (animationVariant.hidden.y) {
      animationVariant.hidden.y = distance
    }
  }

  return animationVariant
}
