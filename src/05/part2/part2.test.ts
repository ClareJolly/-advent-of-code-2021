import part2 from '.'
import { getDataForTest } from '../../../test/unit/utils'

const { realData } = getDataForTest(__dirname)

describe('part2', () => {
  it('returns the expected answer with test data', () => {
    const testData = ['qjhvhtzxzqqjkmpb', 'xxyxx', 'uurcxstgmygtbstg', 'ieodomkazucvgmuy']
    const result = part2(testData)
    expect(result).toStrictEqual(2)
  })
  it('returns the expected answer with real data', () => {
    const result = part2(realData)
    expect(result).toStrictEqual(53)
  })
})
