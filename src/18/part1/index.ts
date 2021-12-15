export const ADJACENT_CONFIG: number[][] = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
  [1, 1],
  [1, -1],
  [-1, 1],
  [-1, -1],
]

interface Details {
  on: boolean
  adjacent: string[]
}
interface Summary {
  [key: string]: Details
}

const part1 = (inputData: string[]) => {
  const data = inputData.map(d => d.split(''))
  const steps = 100

  const summary: Summary = data.reduce((acc, row, y) => {
    row.forEach((r, x) => {
      let adj: string[] = []

      ADJACENT_CONFIG.forEach(([yAdj, xAdj]) => {
        if (data[y + yAdj] && data[y + yAdj][x + xAdj]) adj.push(`${y + yAdj},${x + xAdj}`)
      })

      acc[`${y},${x}`] = { on: r === '#', adjacent: adj }
    })
    return acc
  }, {} as Summary)

  for (let step = 0; step < steps; step++) {
    const onQueue = []
    const offQueue = []

    const onCheck = (coOrd: string) => !summary[coOrd].on
    const offCheck = (coOrd: string) => summary[coOrd].on

    Object.entries(summary).forEach(([key, { on, adjacent }]) => {
      let adjOnCount = 0
      adjacent.forEach(c => {
        if (summary[c].on) adjOnCount++
      })
      if (on && (adjOnCount === 2 || adjOnCount === 3)) onQueue.push(key)
      if (on && adjOnCount !== 2 && adjOnCount !== 3) offQueue.push(key)
      if (!on && adjOnCount === 3) onQueue.push(key)
      if (!on && adjOnCount !== 3) offQueue.push(key)
    })
    onQueue.forEach(q => {
      summary[q].on = true
    })
    offQueue.forEach(q => {
      summary[q].on = false
    })
  }

  return Object.entries(summary).filter(([_, { on }]) => on).length
}

export default part1
