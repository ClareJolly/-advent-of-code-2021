const part1 = (inputData: string[]) => {
  const gifts = inputData.map(g => g.split('x').map(s => Number(s)))

  const areas = gifts.map(([l, w, h]) => {
    const sides = [l * h, l * w, h * w]
    const shortest = sides.sort((a, b) => a - b)[0]

    return (
      sides.reduce((acc, side) => {
        return acc + 2 * side
      }, 0) + shortest
    )
  })
  return areas.reduce((acc, item) => {
    return acc + item
  }, 0)
}

export default part1
