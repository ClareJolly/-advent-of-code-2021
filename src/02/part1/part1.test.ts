import part1 from '.'

describe('part1', () => {
  it('returns the expected answer with test data', () => {
    const result = part1(['2x3x4'])
    expect(result).toStrictEqual(58)
  })
  it('returns the expected answer with test data', () => {
    const result = part1(['1x1x10'])
    expect(result).toStrictEqual(43)
  })
})
