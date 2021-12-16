import { ADJACENT_CONFIG } from '../helpers'
import { Summary } from '../types'

const part2 = (inputData: string[]) => {
  const data = inputData.map(d => d.split(''))

  const height = data.length - 1
  const width = data[0].length - 1

  const stuckOn = [`0,0`, `0,${width}`, `${height},0`, `${height},${width}`]
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

  stuckOn.forEach(s => {
    summary[s].on = true
  })

  for (let step = 0; step < steps; step++) {
    const onQueue: string[] = []
    const offQueue: string[] = []

    Object.entries(summary).forEach(([key, { on, adjacent }]) => {
      let adjOnCount = 0
      adjacent.forEach(c => {
        if (summary[c].on) adjOnCount++
      })
      if (on && (adjOnCount === 2 || adjOnCount === 3)) onQueue.push(key)
      if (!on && adjOnCount === 3) onQueue.push(key)
      if (!stuckOn.includes(key)) {
        if (on && adjOnCount !== 2 && adjOnCount !== 3) offQueue.push(key)
        if (!on && adjOnCount !== 3) offQueue.push(key)
      }
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

export default part2
