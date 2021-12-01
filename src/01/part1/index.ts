const part1 = (inputData: string): number => {
  const up = (inputData.match(/\(/g) || []).length
  const down = (inputData.match(/\)/g) || []).length

  return up - down
}

export default part1
