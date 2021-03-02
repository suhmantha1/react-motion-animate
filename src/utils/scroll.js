const getTopScrollDistance = ({ $ref }) => {
  // Distance when top of $ref enters the viewport
  if (!window || !$ref) return 0

  return (
    window.pageYOffset + $ref.getBoundingClientRect().top - window.innerHeight
  )
}

const getBottomScrollDistance = ({ $ref, topPos }) => {
  // Distance when bottom of $ref enters the viewport
  if (!window || !$ref) return 0

  return topPos || getTopScrollDistance({ $ref }) + $ref.offsetHeight
}

export const getStartScrollPos = ({ $ref, startPercentile, endPercentile }) => {
  // Positions based on top of $ref
  const positions = { startPos: 0, endPos: 0, topPos: 0 }
  if (!window || !$ref) return positions

  const topPos = getTopScrollDistance({ $ref }) // Position when $ref enters the viewport
  positions.topPos = topPos

  positions.startPos = topPos + window.innerHeight * startPercentile // Start the animation
  positions.endPos = topPos + window.innerHeight * endPercentile // Complete the animation

  return positions
}

export const getEndScrollPos = ({
  $ref,
  topPos,
  startPercentile,
  endPercentile
}) => {
  // Positions based on bottom of $ref
  const positions = { startPos: 0, endPos: 0 }
  if (!window || !$ref) return positions

  const bottomPos = getBottomScrollDistance({ $ref, topPos }) // Position when $ref bottom enters the viewport
  positions.startPos = bottomPos + window.innerHeight * startPercentile // Start the animation
  positions.endPos = bottomPos + window.innerHeight * endPercentile // Complete the animation

  return positions
}

export const getFullScrollPos = ({
  $ref,
  startPercentile,
  startFullPercentile,
  endFullPercentile,
  endPercentile
}) => {
  // Positions based on top and bottom of $ref
  const positions = { startPos: 0, startFullPos: 0, endFullPos: 0, endPos: 0 }
  if (!window || !$ref) return positions

  const topPositions = getStartScrollPos({
    $ref,
    startPercentile,
    endPercentile: startFullPercentile
  })
  const bottomPositions = getEndScrollPos({
    $ref,
    topPos: topPositions.topPos,
    startPercentile: endFullPercentile,
    endPercentile
  })

  positions.startPos = topPositions.startPos // Start the animation
  positions.startFullPos = topPositions.endPos // Full animation
  positions.endFullPos = bottomPositions.startPos // End the full animation
  positions.endPos = bottomPositions.endPos // End the animtion

  return positions
}
