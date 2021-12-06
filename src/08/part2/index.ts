interface Information {
  string: string
  total: number
  characters: number
  encoded: string
}

const part2 = (inputData: string[]) => {
  const data = inputData.reduce((acc, item) => {
    const chars = item
      .replace(/\\\\/g, '*')
      .replace(/\\x../g, '*')
      .replace(/\\"/g, '*')
      .replace(/"/g, '')

    const encoded = item.replace(/\\|"/g, 'aa') + 'aa'

    acc.push({ string: item, total: item.length, characters: chars.length, encoded })
    return acc
  }, [] as Information[])

  return data.reduce((acc, item) => {
    return acc + item.encoded.length - item.total
  }, 0)
}

export default part2
