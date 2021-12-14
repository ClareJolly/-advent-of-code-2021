import { Stats } from '../types'

export const formatData = (inputData: string[]) => {
  return inputData.map(s => {
    const sueStats = s.replace(/Sue \d+: /g, '').split(', ')
    const stats: Stats = {}
    sueStats.forEach(item => {
      const [key, val] = item.split(': ')
      stats[key.trim() as keyof Stats] = Number(val)
    })
    return stats
  })
}
