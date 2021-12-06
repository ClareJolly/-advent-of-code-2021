interface Information {
  string: string
  total: number
  characters?: number
}

const part1 = (inputData: string[]) => {
  const data = inputData.reduce((acc, item) => {
    const chars = item.replace(/\\x../g, '')
    console.log('🚀 ~ file: index.ts ~ line 10 ~ data ~ chars', chars)
    acc.push({ string: item, total: item.length })
    return acc
  }, [] as Information[])
  console.log('🚀 ~ file: index.ts ~ line 12 ~ data ~ data', data)
}

export default part1
