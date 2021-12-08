const part1 = (inputData: string) => {
  const regexp = /[^-\d]+/g

  const array = inputData.replace(regexp, '*')

  const data = array.split('*')?.map(a => Number(a))

  return data?.reduce((acc, item) => acc + Number(item))
}

export default part1
