export interface ReindeerStats {
  [key: string]: {
    fly: { speed: number; time: number }
    rest: { time: number; speed: number }
    distance: number
    state: number
    nextStateChange: number
  }
}
