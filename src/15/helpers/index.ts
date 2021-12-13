import {
  IngredientAttributes,
  IngredientDetails,
  Ingredients,
  IngredientsWithScore,
} from '../types'

export const parseInput = (inputData: string[]) =>
  inputData.reduce((acc, item) => {
    const [key, details] = item.split(': ')
    const ingrDetails: IngredientDetails = { name: key } as IngredientDetails
    const attributes: [string, number][] = details.split(', ').map(d => {
      const [attr, num] = d.split(' ')
      return [attr, Number(num)]
    })
    attributes.forEach(([a, num]) => (ingrDetails[a as keyof IngredientAttributes] = num))
    acc.push(ingrDetails)
    return acc
  }, [] as IngredientDetails[])

export const getAllPossibleCombos = (n: number, size: number = 100): number[][] => {
  if (n == 0) return []
  let arr = []
  for (let i = 0; i <= size; i++) {
    let subArrs = getAllPossibleCombos(n - 1, size - i)
    if (subArrs.length == 0) arr.push([i])
    else {
      for (var j = 0; j < subArrs.length; j++) {
        subArrs[j].unshift(i)
        arr.push(subArrs[j])
      }
    }
  }

  return arr
}

export const getComboScore = (
  combination: number[],
  data: Ingredients,
  part2: boolean = false,
): IngredientsWithScore => {
  var score: IngredientsWithScore = {
    capacity: 0,
    durability: 0,
    flavor: 0,
    texture: 0,
    calories: 0,
  } as IngredientsWithScore

  combination.forEach((com, i) => {
    score.capacity += data[i].capacity * com
    score.durability += data[i].durability * com
    score.flavor += data[i].flavor * com
    score.texture += data[i].texture * com
    if (part2) score.calories += data[i].calories * com
  })
  score.capacity = Math.max(0, score.capacity)
  score.durability = Math.max(0, score.durability)
  score.flavor = Math.max(0, score.flavor)
  score.texture = Math.max(0, score.texture)
  score.calories = Math.max(0, score.calories)

  score.total = score.capacity * score.durability * score.flavor * score.texture
  return score
}

export const getHighestScore = (
  allCombos: number[][],
  data: Ingredients,
  part2: boolean = false,
) => {
  const highestCombo = allCombos.reduce(
    (
      acc: { score: number; source: number[] },
      val: number[],
    ): { score: number; source: number[] } => {
      let score = getComboScore(val, data, part2)
      if (score.total > acc.score && (!part2 || score.calories === 500)) {
        acc.score = score.total
        acc.source = val
      }
      return acc
    },
    { score: 0 } as { score: number; source: number[] },
  )
  return highestCombo.score
}
