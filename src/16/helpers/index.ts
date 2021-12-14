import { STATS_TO_CHECK } from '../constants'
import { CheckerConfig, Stats } from '../types'

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

export const equalityCheck = (key: keyof Stats, val: number): boolean => STATS_TO_CHECK[key] === val
export const greaterThanCheck = (key: keyof Stats, val: number): boolean =>
  STATS_TO_CHECK[key] < val
export const lessThanCheck = (key: keyof Stats, val: number): boolean => STATS_TO_CHECK[key] > val

export const getSue = (data: Stats[], checkerConfig: CheckerConfig) => {
  const matches: number[] = []

  data.forEach((stats, i) => {
    if (
      Object.entries(stats).every(([key, val]) =>
        checkerConfig[key as keyof Stats](key as keyof Stats, val),
      )
    )
      matches.push(i)
  })

  if (matches.length === 1) return matches[0] + 1
}
