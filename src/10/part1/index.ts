import { getSummary } from '../helpers'

const part1 = (inputData: string[]) => {
  const data = inputData[0]

  let val = ''
  let iteration = 0

  const recur = (data: string) => {
    iteration++

    const result = getSummary(data)

    val = result

    if (iteration < 40) recur(result)
  }

  recur(data)

  return val.length
}

export default part1
