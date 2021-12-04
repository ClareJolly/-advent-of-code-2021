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

const part2 = (inputData: string[]) => {
  inputData.forEach(instruction => {
    const parsedInstruction = parseInstruction(instruction)
    WIRES.set(parsedInstruction.destination, {
      command: parsedInstruction.command,
      args: parsedInstruction.args,
    })
  })

  WIRES.set('b', 956)

  return calculateWire('a')
}

export default part2
