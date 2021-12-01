import part2 from '.'

describe('part2', () => {
  it('returns the expected answer with test data', () => {
    const result = part2(['2x3x4'])
    expect(result).toStrictEqual(34)
  })
  it('returns the expected answer with test data', () => {
    const result = part2(['1x1x10'])
    expect(result).toStrictEqual(14)
  })
})
