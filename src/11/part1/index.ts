var longestConsecutive = (nums: number[]) => {
  var map: { [key: number]: { start: number; end: number } } = {}
  var max = 0
  var start = 0
  var end = 0
  var num = 0
  var len = nums.length
  for (var i = 0; i < len; i++) {
    num = nums[i]
    if (map[num]) continue
    start = map[num - 1] ? map[num - 1].start : num
    end = map[num + 1] ? map[num + 1].end : num
    map[num] = { start: num, end: num }
    map[start].end = end
    map[end].start = start
    max = Math.max(end - start + 1, max)
  }
  return max
}

const testPairs = (pass: number[]) => {
  var count = 0
  for (var i = 0; i < 7; i++) {
    if (pass[i] / pass[i + 1] === 1) {
      count++
      i++
    }
  }
  if (count >= 2) return true
  return false
}

const part1 = (inputData: string) => {
  const testData = 'abcdffaa'
  //   const data = inputData.split('')
  const data = testData.split('')
  const nums = data.map(d => d.charCodeAt(0))
  console.log('🚀 ~ file: index.ts ~ line 4 ~ part1 ~ nums', nums)
  // let ascii = 'a'.charCodeAt(0)
  // var chr = String.fromCharCode(97 + n); // where n is 0, 1, 2 ...

  const a = longestConsecutive(nums)
  console.log('🚀 ~ file: index.ts ~ line 18 ~ part1 ~ a', a)

  const checks = [
    (pw: string[]) => !pw.some(d => d === 'i' || d === 'o' || d === 'i'),
    (pw: string[]) => {
      const nums = pw.map(d => d.charCodeAt(0))
      return longestConsecutive(nums) > 2
    },
    (pw: string[]) => testPairs(pw.map(d => d.charCodeAt(0))),
  ]

  const valid = checks.every(c => {
    return c(data)
  })
  console.log('🚀 ~ file: index.ts ~ line 54 ~ part1 ~ valid', valid)
}

export default part1
