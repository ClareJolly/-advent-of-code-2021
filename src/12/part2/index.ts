import part1 from '../../12/part1'

const part2 = (inputData: string) => {
  const regexp = /-?\d+/g

  const parsed = JSON.parse(inputData, (_, value) => {
    if (!Array.isArray(value))
      return Object.keys(value)
        .map(key => value[key])
        .indexOf('red') !== -1
        ? {}
        : value
    return value
  })

  return JSON.stringify(parsed)
    .match(regexp)!
    .reduce((acc, item) => acc + Number(item), 0)
}

export default part2
