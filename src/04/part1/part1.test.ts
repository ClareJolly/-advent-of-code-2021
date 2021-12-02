import part1 from '.'

describe('part1', () => {
  const cases: [string, string][] = [
    ['abcdef', '609043'],
    ['pqrstuv', '1048970'],
  ]

  test.each(cases)('given %p as arguments, returns %p', (firstArg, expectedResult) => {
    const result = part1(firstArg)
    expect(result).toEqual(expectedResult)
  })
})
