import md5 from 'md5'

const part2 = (inputData: string) => {
  let x = 0
  let answer
  while (x < 10000000 && !answer) {
    const val = md5(`${inputData}${x}`)
    if (val.indexOf('000000') === 0) answer = x
    x++
  }
  return String(answer)
}

export default part2
