import { arrToNumbers } from '../../helpers'
import { counter } from '../helpers'

const part1 = (inputData: string[]) => {
  const data = arrToNumbers(inputData)

  const total = 150

  return counter({ total, n: data.length, data })
}

export default part1
