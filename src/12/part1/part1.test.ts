import fs from 'fs'
import path from 'path'
import part1 from '.'

const realData = fs.readFileSync(path.join(__dirname, './data/input.txt'), 'utf-8')
describe('part1', () => {
  it('returns the expected answer with test data', () => {
    // const result = part1(testData)
    // expect(result).toStrictEqual()
  })
  it('returns the expected answer with real data', () => {
    const result = part1(realData)
    expect(result).toStrictEqual(119433)
  })
})
