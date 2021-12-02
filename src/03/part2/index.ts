import { getNewPosition } from '../helpers'

const part2 = (inputData: string) => {
  const santaPositions = ['0x0']
  const robotPositions = ['0x0']

  const data = inputData.split('')

  const santa = data.filter((_, index) => {
    return index % 2 === 0
  })
  const robot = data.filter((_, index) => {
    return index % 2 !== 0
  })

  santa.forEach(d => {
    santaPositions.push(getNewPosition(santaPositions, d))
  })
  robot.forEach(d => {
    robotPositions.push(getNewPosition(robotPositions, d))
  })

  return [...new Set([...santaPositions, ...robotPositions])].length
}

export default part2
