import { arrToNumbers } from '../../helpers'
import { counter } from '../helpers'

const part2 = (inputData: string[]) => {
  const data = arrToNumbers(inputData)

  const total = 150

  var i = 1,
    result
  while (!result) {
    result = counter({ total, n: i++, data })
  }
  return result
}

export default part2
