import { getAllPossibleCombos, getHighestScore, parseInput } from '../helpers'

const part2 = (inputData: string[]) => {
  const data = parseInput(inputData)

  var allCombos: number[][] = getAllPossibleCombos(data.length, 100)

  return getHighestScore(allCombos, data, true)
}
export default part2
