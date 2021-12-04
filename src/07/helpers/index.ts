export const COMMAND_REGEX = /[A-Z]+/g
export const ARGUMENTS_REGEX = /[a-z0-9]+/g

export const OPERATIONS: { [key: string]: (a: number, b: number) => number } = {
  OR: (a: number, b: number): number => a | b,
  AND: (a: number, b: number): number => a & b,
  LSHIFT: (a: number, b: number): number => a << b,
  RSHIFT: (a: number, b: number): number => a >> b,
  NOT: (a: number, b: number): number => ~a,
}

export const parseInstruction = (instruction: string) => {
  const command = instruction.match(COMMAND_REGEX)
  const args = instruction.match(ARGUMENTS_REGEX)
  const destination = args!.pop()

  return {
    command: command && command[0],
    args: args!.map(arg => (isNaN(Number(arg)) ? arg : Number(arg))),
    destination: destination,
  }
}
