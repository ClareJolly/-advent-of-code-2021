import { equalityCheck, formatData, getSue, greaterThanCheck, lessThanCheck } from '../helpers'
import { CheckerConfig } from '../types'

const checkerConfig: CheckerConfig = {
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

  return getSue(data, checkerConfig)
}

export default part2
