import part1 from '../part1'

const part2 = (inputData: string) => {
  const initialPw = part1(inputData)
  return part1(initialPw)
}

export default part2
