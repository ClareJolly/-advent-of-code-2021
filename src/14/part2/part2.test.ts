import part2 from '.'
import { getDataForTest } from '../../../test/unit/utils'

const { testData, realData } = getDataForTest(__dirname)

describe('part2', () => {
  it('returns the expected answer with test data', () => {
    const result = part2(testData, 1000)
    expect(result).toStrictEqual(689)
  })
  it('returns the expected answer with real data', () => {
    const result = part2(realData, 2503)
    expect(result).toStrictEqual(1102)
  })
})
