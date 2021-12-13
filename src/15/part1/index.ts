import { getAllPossibleCombos, getHighestScore, parseInput } from '../helpers'

const part1 = (inputData: string[]) => {
  const data = parseInput(inputData)

  var allCombos: number[][] = getAllPossibleCombos(data.length, 100)

  return getHighestScore(allCombos, data)
}
export default part1
