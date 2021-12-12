import { getWinningScore, parseInput, processSecond } from '../helpers'

const part2 = (inputData: string[], seconds: number) => {
  const data = parseInput(inputData, true)

  const reindeer = Object.keys(data)

  for (let s = 1; s <= seconds; s++) {
    processSecond(reindeer, data, s, true)
  }
  return getWinningScore(data)
}

export default part2
