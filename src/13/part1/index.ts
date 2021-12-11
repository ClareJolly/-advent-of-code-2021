import { permute } from '../helpers'

const part1 = (inputData: string[]) => {
  const data: [string, number, number, string][] = inputData.map(d => {
    const words = d.split(' ')
    return [words[0], words[2] === 'gain' ? 1 : -1, Number(words[3]), words[10].replace('.', '')]
  })

  const permutations = permute([...new Set(data.map(d => d[0]))])

  const sums = permutations.map((perm, i) => {
    const happiness: number[] = []
    perm.forEach((p, i, arr) => {
      const a = arr[i - 1] ?? arr[arr.length - 1]
      const b = arr[i + 1] ?? arr[0]

      const [___, aMulti, aNum] = data.filter(
        ([name, _, __, nextTo]) => name === p && nextTo === a,
      )[0]
      const [____, bMulti, bNum] = data.filter(
        ([name, _, __, nextTo]) => name === p && nextTo === b,
      )[0]

      happiness.push(aMulti * aNum)
      happiness.push(bMulti * bNum)
    })
    return [happiness.reduce((a, b) => a + b)]
  })

  return Math.max(
    ...sums.reduce((acc, item) => {
      acc.push(item[0])
      return acc
    }, []),
  )
}

export default part1
