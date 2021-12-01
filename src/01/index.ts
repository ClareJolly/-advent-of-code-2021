/* istanbul ignore file */

import path from 'path'
import fs from 'fs'

import part1 from './part1'
import part2 from './part2'

const run = () => {
  const inputData = fs.readFileSync(path.join(__dirname, './data/input.txt'), 'utf-8')

  const solution1 = part1(inputData)
  const solution2 = part2(inputData)

  console.log(`part 1 ====>`, solution1)
  console.log(`part 2 ====>`, solution2)

  return { part1: solution1, part2: solution2 }
}

export default run
