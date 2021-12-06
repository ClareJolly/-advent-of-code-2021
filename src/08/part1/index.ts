interface Information {
  string: string
  total: number
  characters: number
}

const part1 = (inputData: string[]) => {
  const data = inputData.reduce((acc, item) => {
    const chars = item
      .replace(/\\\\/g, '*')
      .replace(/\\x../g, '*')
      .replace(/\\"/g, '*')
      .replace(/"/g, '')
    acc.push({ string: item, total: item.length, characters: chars.length })
    return acc
  }, [] as Information[])

  return data.reduce((acc, item) => {
    return acc + item.total - item.characters
  }, 0)
}

export default part1
