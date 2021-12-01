import part2 from '.'

describe('part2', () => {
  const cases: [string, number][] = [
    [')', 1],
    ['()())', 5],
  ]

  test.each(cases)('given %p as arguments, returns %p', (firstArg, expectedResult) => {
    const result = part2(firstArg)
    expect(result).toEqual(expectedResult)
  })
})
