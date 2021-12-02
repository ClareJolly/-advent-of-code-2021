const part2 = (inputData: string[]) => {
  const gifts = inputData.map(g => g.split('x').map(s => Number(s)))

  const ribbons = gifts.map(sides => {
    const smallest = sides.sort((a, b) => a - b).slice(0, 2)
    const ribbon = 2 * (smallest[0] + smallest[1])

    const volume = sides.reduce((acc, item) => acc * item, 1)

    return ribbon + volume
  })
  return ribbons.reduce((acc, item) => acc + item, 0)
}

export default part2
