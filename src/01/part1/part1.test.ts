import part1 from '.'

describe('part1', () => {
  const cases: [string, number][] = [
    ['(())', 0],
    ['()()', 0],
    ['(((', 3],
    ['(()(()(', 3],
    ['))(((((', 3],
    ['())', -1],
    ['))(', -1],
    [')))', -3],
    [')())())', -3],
  ]

  test.each(cases)('given %p as arguments, returns %p', (firstArg, expectedResult) => {
    const result = part1(firstArg)
    expect(result).toEqual(expectedResult)
  })
})
