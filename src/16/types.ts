export interface Stats {
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

export type Keys = keyof Stats
export interface CheckerConfig {
  [key: string]: (key: Keys, val: number) => boolean
}
