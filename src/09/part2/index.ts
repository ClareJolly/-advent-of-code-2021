import { getMappedRoutes } from '../helpers'

const part2 = (routes: string[]) => {
  const mappedRoutes = getMappedRoutes(routes)

  return Math.max(...mappedRoutes)
}

export default part2
