import part2 from '.'

describe('part2', () => {
  const cases: [string, number][] = [
    ['^v', 3],
    ['^>v<', 3],
    ['^v^v^v^v^v', 11],
  ]

  test.each(cases)('given %p as arguments, returns %p', (firstArg, expectedResult) => {
    const result = part2(firstArg)
    expect(result).toEqual(expectedResult)
  })
})
