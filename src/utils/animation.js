import variants from '../constants/animations'

export const getAnimation = ({ animation, variant, distance }) => {
  const _variants = { ...variants }
  const animationVariant = variant || _variants[animation]

  if (!animationVariant || !animationVariant.hidden) return animationVariant

  // Override distance
  if (distance) {
    if (animationVariant.hidden.y) {
      animationVariant.hidden.y = distance
    }
  }

  return animationVariant
}
