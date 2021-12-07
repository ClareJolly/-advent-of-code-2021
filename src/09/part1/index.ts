import { getMappedRoutes } from '../helpers'

const part1 = (routes: string[]) => {
  const mappedRoutes = getMappedRoutes(routes)

  return Math.min(...mappedRoutes)
}

export default part1
