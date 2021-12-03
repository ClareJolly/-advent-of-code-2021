type Command = 'turn on' | 'turn off' | 'toggle'

interface LightCommand {
  command: Command
  start: number[]
  end: number[]
}

const part1 = (inputData: string[]) => {
  const data: LightCommand[] = inputData.map(d => {
    const regex = new RegExp('(turn on|toggle|turn off)( )(.*)( through )(.*)', 'g')
    const matches = regex.exec(d)

    return {
      command: matches![1] as Command,
      start: matches![3].split(',').map(v => Number(v)),
      end: matches![5].split(',').map(v => Number(v)),
    }
  })

  const lights = data.reduce((lightGrid, { command, start, end }) => {
    for (let x = start[0]; x <= end[0]; x++) {
      for (let y = start[1]; y <= end[1]; y++) {
        if (lightGrid[x] == undefined) lightGrid[x] = []
        if (lightGrid[x][y] == undefined) lightGrid[x][y] = false

        if (command === 'turn on') {
          lightGrid[x][y] = true
        }
        if (command === 'turn off') {
          lightGrid[x][y] = false
        }
        if (command === 'toggle') {
          lightGrid[x][y] = !lightGrid[x][y]
        }
      }
    }

    return lightGrid
  }, [] as boolean[][])

  return lights.reduce((acc, row) => {
    row.forEach(l => {
      if (l) acc++
    })
    return acc
  }, 0)
}

export default part1
