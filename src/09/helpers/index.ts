import { Route } from '../types'

export const parseRoute = (route: string): Route => {
  const { groups } = route.match(/(?<from>\w+) to (?<to>\w+) = (?<distance>\d+)/) || []

  if (!groups) {
    throw new Error('Invalid input')
  }

  const { from, to, distance } = groups

  return {
    from,
    to,
    distance: parseInt(distance, 10),
  }
}

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

export const mapRoutes = (routes: string[], distances: Map<string, number>): number => {
  let total = 0

  for (let i = 0; i < routes.length - 1; i += 1) {
    const current = routes[i]
    const next = routes[i + 1]

    total += distances.get(`${current} -> ${next}`) || 0
  }

  return total
}

export const getMappedRoutes = (routes: string[]) => {
  const distances = new Map<string, number>()
  const places = new Set<string>()

  routes.forEach(route => {
    const { from, to, distance } = parseRoute(route)

    distances.set(`${from} -> ${to}`, distance)
    distances.set(`${to} -> ${from}`, distance)

    places.add(from)
    places.add(to)
  })

  const allRoutes = permute(Array.from(places))
  return allRoutes.map(allRoute => mapRoutes(allRoute, distances))
}
