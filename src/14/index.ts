import { fileToArray } from '../helpers'
import path from 'path'

import part1 from './part1'
import part2 from './part2'

const run = () => {
  const test = false
  const file = test ? 'testData' : 'input'
  const inputData = fileToArray(path.join(__dirname, `data/${file}.txt`))

  const seconds = test ? 1000 : 2503
  const solution1 = part1(inputData, seconds)
  const solution2 = part2(inputData, seconds)

  console.log(`part 1 ====>`, solution1)
  console.log(`part 2 ====>`, solution2)

  return { part1: solution1, part2: solution2 }
}

export default run
