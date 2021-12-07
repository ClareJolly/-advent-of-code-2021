export const getSummary = (data: string) => {
  const input = data.split('').map(d => Number(d))
  let result: { count: number; num: number }[] = [{ count: 1, num: input[0] }]

  input.slice(1).forEach((e, i) => {
    if (e == input[i]) {
      result[result.length - 1].count++
    } else {
      result.push({ count: 1, num: e })
    }
  })

  return result.reduce((acc, { count, num }) => {
    return acc + String(count) + String(num)
  }, '')
}
