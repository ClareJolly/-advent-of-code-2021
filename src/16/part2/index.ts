import { formatData } from '../helpers'
import { Stats } from '../types'
const STATS_TO_CHECK = {
  children: 3,
  cats: 7,
  samoyeds: 2,
  pomeranians: 3,
  akitas: 0,
  vizslas: 0,
  goldfish: 5,
  trees: 3,
  cars: 2,
  perfumes: 1,
}

const equalityCheck = (key: keyof Stats, val: number): boolean => STATS_TO_CHECK[key] === val
const greaterThanCheck = (key: keyof Stats, val: number): boolean => STATS_TO_CHECK[key] < val
const lessThanCheck = (key: keyof Stats, val: number): boolean => STATS_TO_CHECK[key] > val

const checkerConfig = {
  children: equalityCheck,
  cats: greaterThanCheck,
  samoyeds: equalityCheck,
  pomeranians: lessThanCheck,
  akitas: equalityCheck,
  vizslas: equalityCheck,
  goldfish: lessThanCheck,
  trees: greaterThanCheck,
  cars: equalityCheck,
  perfumes: equalityCheck,
}

const part2 = (inputData: string[]) => {
  const data = formatData(inputData)

  const matches: number[] = []

  data.forEach((stats, i) => {
    if (
      Object.entries(stats).every(([key, val]) =>
        checkerConfig[key as keyof Stats](key as keyof Stats, val),
      )
    )
      matches.push(i)
  })

  if (matches.length === 1) return matches[0] + 1
}

export default part2
