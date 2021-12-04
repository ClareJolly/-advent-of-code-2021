import { OPERATIONS, parseInstruction } from '../helpers'

const WIRES = new Map()

const calculateWire = (wireName: string) => {
  const wire = WIRES.get(wireName)

  if (typeof wireName === 'number') return wireName
  if (typeof wire === 'number') return wire
  if (typeof wire === 'undefined') return undefined

  if (!wire.command) {
    WIRES.set(wireName, calculateWire(wire.args[0]))
  } else {
    WIRES.set(
      wireName,
      OPERATIONS[wire.command](calculateWire(wire.args[0]), calculateWire(wire.args[1])),
    )
  }

  return WIRES.get(wireName)
}

const part1 = (inputData: string[]) => {
  inputData.forEach(instruction => {
    const parsedInstruction = parseInstruction(instruction)
    WIRES.set(parsedInstruction.destination, {
      command: parsedInstruction.command,
      args: parsedInstruction.args,
    })
  })

  return calculateWire('a')
}

export default part1

// const part1 = (inputData: string[]) => {
//   const data: [string | string[], string][] = inputData.map(d =>
//     d.split(' -> ').map(d => (d.includes(' ') ? d.split(' ') : d)),
//   ) as [string | string[], string][]

//   const setup = data.reduce((acc, [instructions, key]) => {
//     acc[key] = !Array.isArray(instructions) ? Number(instructions) : undefined
//     return acc
//   }, {} as { [key: string]: any })

//   const operations: { [key: string]: (a: number, b: number) => number } = {
//     OR: (a: number, b: number): number => a | b,
//     AND: (a: number, b: number): number => a & b,
//     LSHIFT: (a: number, b: number): number => a << b,
//     RSHIFT: (a: number, b: number): number => a >> b,
//     NOT: (a: number, b: number): number => b ^ 65535,
//   }

//   data.forEach(([instructions, key]) => {
//     if (Array.isArray(instructions)) {
//       if (instructions.length === 2) instructions.unshift('')
//       const [a, op, b] = instructions
//       const result = operations[op](Number(a) ? a : setup[a], Number(b) ? b : setup[b])
//       setup[key] = result
//     }
//   })
//   console.log('🚀 ~ file: index.ts ~ line 25 ~ data.forEach ~ setup', setup)
//   return setup.a
// }

// export default part1
