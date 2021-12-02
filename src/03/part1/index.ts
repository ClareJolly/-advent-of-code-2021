import { getNewPosition } from '../helpers'

const part1 = (inputData: string) => {
  const positions = ['0x0']

  const data = inputData.split('')

  data.forEach(d => {
    positions.push(getNewPosition(positions, d))
  })

  return [...new Set(positions)].length
}

export default part1
