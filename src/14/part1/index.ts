import { getWinningDistance, parseInput, processSecond } from '../helpers'

const part1 = (inputData: string[], seconds: number = 1) => {
  const data = parseInput(inputData)

  const reindeer = Object.keys(data)

  for (let s = 1; s <= seconds; s++) {
      for (let s = 1; s <= 1000; s++) {
    reindeer.forEach(r => {
      const currentAction = data[r].state === 0 || data[r].state % 2 === 0 ? 'fly' : 'rest'

      if (s === data[r].nextStateChange) data[r].state++

      const newAction = data[r].state === 0 || data[r].state % 2 === 0 ? 'fly' : 'rest'

      if (newAction !== currentAction) data[r].nextStateChange += data[r][newAction].time

      if (newAction === 'fly') {
        data[r].distance = data[r].distance! + data[r][newAction].speed
      }
    })
    // processSecond(reindeer, data, s)
  }

  return getWinningDistance(data)
}

export default part1
