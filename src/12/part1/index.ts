const part1 = (inputData: string) => {
  const regexp = /-?\d+/g

  const matches = inputData.match(regexp) || []
  const mappedNumbers = matches.map(Number)
  return mappedNumbers.reduce((acc, item) => acc + item, 0)
}

export default part1
