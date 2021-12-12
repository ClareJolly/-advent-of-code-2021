import { ReindeerStats } from '../types'

export const getDistanceDetails = (data: ReindeerStats) => {
  return Object.entries(data)
    .map(([k, d]) => [k, String(d.distance)])
    .sort((a, b) => {
      return Number(b[1]) - Number(a[1])
    })
}

export const getScoreDetails = (data: ReindeerStats) => {
  return Object.entries(data)
    .map(([k, d]) => [k, String(d.score!)])
    .sort((a, b) => {
      return Number(b[1]) - Number(a[1])
    })
}

export const getWinningScore = (data: ReindeerStats) => {
  return getScoreDetails(data)[0][1]
}

export const getWinnersByDistance = (data: ReindeerStats) => {
  const stats = getDistanceDetails(data)
  const distance = stats[0][1]
  const winners = stats.filter(([_, d]) => d === distance).map(w => w[0])
  return winners
}

export const getWinningDistance = (data: ReindeerStats) => {
  return getDistanceDetails(data)[0][1]
}

export const parseInput = (inputData: string[], part2: boolean = false) => {
  return inputData.reduce((acc, item) => {
    const line = item.split(' ')
    acc[line[0]] = {
      fly: { speed: Number(line[3]), time: Number(line[6]) },
      rest: { time: Number(line[13]), speed: -1 },
      distance: 0,
      state: 0,
      nextStateChange: Number(line[6]) + 1,
    }
    if (part2) acc[line[0]].score = 0

    return acc
  }, {} as ReindeerStats)
}

export const processSecond = (
  reindeer: string[],
  data: ReindeerStats,
  s: number,
  part2: boolean = false,
) => {
  reindeer.forEach(r => {
    const currentAction = data[r].state === 0 || data[r].state % 2 === 0 ? 'fly' : 'rest'

    if (s === data[r].nextStateChange) data[r].state++

    const newAction = data[r].state === 0 || data[r].state % 2 === 0 ? 'fly' : 'rest'

    if (newAction !== currentAction) data[r].nextStateChange += data[r][newAction].time

    if (newAction === 'fly') {
      data[r].distance = data[r].distance! + data[r][newAction].speed
    }
  })
  if (part2) {
    getWinnersByDistance(data).forEach(r => {
      data[r].score!++
    })
  }
}
