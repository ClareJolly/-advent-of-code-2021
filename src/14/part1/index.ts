import { getWinningDistance, parseInput, processSecond } from '../helpers'

const part1 = (inputData: string[], seconds: number) => {
  const data = parseInput(inputData)

  const reindeer = Object.keys(data)

  for (let s = 1; s <= seconds; s++) {
    processSecond(reindeer, data, s)
  }

  return getWinningDistance(data)
}

export default part1
