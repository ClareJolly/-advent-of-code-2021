import part1 from '.'

describe('part1', () => {
  const cases: [string, number][] = [
    ['>', 2],
    ['^>v<', 4],
    ['^v^v^v^v^v', 2],
  ]

  test.each(cases)('given %p as arguments, returns %p', (firstArg, expectedResult) => {
    const result = part1(firstArg)
    expect(result).toEqual(expectedResult)
  })
})
