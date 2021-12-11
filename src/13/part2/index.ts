import { permute } from '../helpers'

const part2 = (inputData: string[]) => {
  const data: [string, number, number, string][] = inputData.map(d => {
    const words = d.split(' ')
    return [words[0], words[2] === 'gain' ? 1 : -1, Number(words[3]), words[10].replace('.', '')]
  })

  const unique = [...new Set(data.map(([name]) => name))]

  const meAdd: [string, number, number, string][] = unique.map(name => ['me', 0, 0, name])
  const meAdd2: [string, number, number, string][] = unique.map(name => [name, 0, 0, 'me'])
  data.push(...meAdd, ...meAdd2)

  const permutations = permute([...new Set(data.map(d => d[0]))])

  const sums = permutations.map(perm => {
    const happiness: number[] = []
    perm.forEach((p, i, arr) => {
      const a = arr[i - 1] ?? arr[arr.length - 1]
      const b = arr[i + 1] ?? arr[0]
      const aData = data.filter(([name, _, __, nextTo]) => name === p && nextTo === a)[0]
      const bData = data.filter(([name, _, __, nextTo]) => name === p && nextTo === b)[0]

      if (aData[1] !== 0) happiness.push(aData[1] * aData[2])
      if (bData[1] !== 0) happiness.push(bData[1] * bData[2])
    })
    return [happiness.reduce((a, b) => a + b)]
  })

  console.log('🚀 ~ file: index.ts ~ line 36 ~ //...sums.reduce ~ sums', sums)
  return sums.flat().sort((a, b) => b - a)[0]
  //   return Math.max(
  //     ...sums.reduce((acc, item) => {
  //       acc.push(item[0])
  //       return acc
  //     }, []),
  //   )
}

export default part2
