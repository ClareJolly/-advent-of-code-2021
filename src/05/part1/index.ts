const checks = [
  (data: string) => {
    // var vowels=str.match(/[aeiou]/g);
    const regex = /[aeiou]/g
    const found = data.match(regex)
    const check = Boolean(found && found.length > 2)
    return check
  },

  (data: string) => {
    // var doubles=str.match(/([a-z])\1/);
    const regex = /[^\w\s]|(.)\1/g
    const found = data.match(regex)
    const check = Boolean(found && found.length)
    return check
  },
  (data: string) => {
    // var badCouplet=str.match(/ab|cd|pq|xy/);
    const invalid = ['ab', 'cd', 'pq', 'xy']
    const check = !invalid.some(m => data.includes(m))
    return check
  },
]

const part1 = (inputData: string[]) => {
  const nice = inputData.filter(d => {
    return checks.every(c => c(d))
  })

  return nice.length
}

export default part1
