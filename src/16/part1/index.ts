interface Stats {
  children?: number
  cats?: number
  samoyeds?: number
  pomeranians?: number
  akitas?: number
  vizslas?: number
  goldfish?: number
  trees?: number
  cars?: number
  perfumes?: number
}

const STATS_TO_CHECK = {
  children: 3,
  cats: 7,
  samoyeds: 2,
  pomeranians: 3,
  akitas: 0,
  vizslas: 0,
  goldfish: 5,
  trees: 3,
  cars: 2,
  perfumes: 1,
}

const part1 = (inputData: string[]) => {
  const data = inputData.map(s => {
    const sueStats = s.replace(/Sue \d+: /g, '').split(', ')
    const stats: Stats = {}
    sueStats.forEach(item => {
      const [key, val] = item.split(': ')
      stats[key.trim() as keyof Stats] = Number(val)
    })
    return stats
  })

  const matches: number[] = []

  data.forEach((stats, i) => {
    if (Object.entries(stats).every(([key, val]) => STATS_TO_CHECK[key as keyof Stats] === val))
      matches.push(i)
  })

  if (matches.length === 1) return matches[0] + 1
}

export default part1
