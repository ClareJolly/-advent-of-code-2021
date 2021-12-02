const part1 = (inputData: string) => {
  const positions = ['0x0']

  const data = inputData.split('')

  data.forEach(d => {
    const lastPosition = positions[positions.length - 1].split('x').map(n => Number(n))
    if (d === '>') positions.push(`${lastPosition[0] + 1}x${lastPosition[1]}`)

    if (d === '<') positions.push(`${lastPosition[0] - 1}x${lastPosition[1]}`)

    if (d === '^') positions.push(`${lastPosition[0]}x${lastPosition[1] + 1}`)

    if (d === 'v') positions.push(`${lastPosition[0]}x${lastPosition[1] - 1}`)
  })
  return [...new Set(positions)].length
}

export default part1
