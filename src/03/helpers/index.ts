export const config: { [key: string]: (arg: number[]) => string } = {
  '>': lastPosition => `${lastPosition[0] + 1}x${lastPosition[1]}`,
  '<': lastPosition => `${lastPosition[0] - 1}x${lastPosition[1]}`,
  '^': lastPosition => `${lastPosition[0]}x${lastPosition[1] + 1}`,
  v: lastPosition => `${lastPosition[0]}x${lastPosition[1] - 1}`,
}

export const getNewPosition = (positions: string[], entry: string): string => {
  const lastPosition = positions[positions.length - 1].split('x').map(n => Number(n))
  return config[entry](lastPosition)
}
