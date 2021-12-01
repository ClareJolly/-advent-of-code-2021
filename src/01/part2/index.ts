const part2 = (inputData: string): number => {
  const data = inputData.split('')
  let floor = 0
  let position = 0

  data.every((move, i) => {
    if (move === '(') floor++
    if (move === ')') floor--

    if (floor === -1) {
      position = i + 1
      return false
    }

    return true
  })

  return position
}

export default part2
