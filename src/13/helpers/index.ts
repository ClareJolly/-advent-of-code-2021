export const permute = <T>(a: T[]): T[][] => {
  if (!a.length) {
    return [a]
  }

  return a.reduce(
    (acc: T[][], item, index) => [
      ...acc,
      ...permute([...a.slice(0, index), ...a.slice(index + 1)]).map(x => [item, ...x]),
    ],
    [],
  )
}
