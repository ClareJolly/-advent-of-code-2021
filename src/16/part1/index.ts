import { equalityCheck, formatData, getSue } from '../helpers'
import { CheckerConfig } from '../types'

const checkerConfig: CheckerConfig = {
  children: equalityCheck,
  cats: equalityCheck,
  samoyeds: equalityCheck,
  pomeranians: equalityCheck,
  akitas: equalityCheck,
  vizslas: equalityCheck,
  goldfish: equalityCheck,
  trees: equalityCheck,
  cars: equalityCheck,
  perfumes: equalityCheck,
}

const part1 = (inputData: string[]) => {
  const data = formatData(inputData)

  return getSue(data, checkerConfig)
}

export default part1
