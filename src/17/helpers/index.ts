import { Counter } from '../types'

export const counter = ({ total, n, i, data }: Counter): number => {
  i = i || 0

  if (n < 0) {
    return 0
  } else if (total === 0) {
    return 1
  } else if (i === data.length || total < 0) {
    return 0
  } else {
    return (
      counter({ total, n, i: i + 1, data }) +
      counter({ total: total - data[i], n: n - 1, i: i + 1, data })
    )
  }
}
