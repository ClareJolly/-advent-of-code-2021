const incrementPassword = (password: string) => {
  let strSplit = password.split('')
  strSplit[strSplit.length - 1] = String.fromCharCode(
    strSplit[strSplit.length - 1].charCodeAt(0) + 1,
  )
  for (let i = strSplit.length - 1; i > 0; i--) {
    if (strSplit[i].charCodeAt(0) == 123) {
      strSplit[i] = 'a'
      strSplit[i - 1] = String.fromCharCode(strSplit[i - 1].charCodeAt(0) + 1)
    }
  }
  return strSplit.join('')
}

const checkConsecutive = (password: string) => {
  let charCodeArray = password.split('').map(function (x) {
    return x.charCodeAt(0)
  })
  for (let i = charCodeArray.length; i >= 2; i--) {
    if (
      charCodeArray[i] - charCodeArray[i - 1] == 1 &&
      charCodeArray[i - 1] - charCodeArray[i - 2] == 1
    ) {
      return true
    }
  }
  return false
}

const checkForChars = (password: string) => {
  if (!password.split('').some(d => d === 'i' || d === 'o' || d === 'l')) {
    return true
  }
  return false
}

const checkPairs = (password: string) => {
  let pairs = password.match(/(\w)\1+/g)
  if (pairs != null && pairs.length >= 2) {
    return true
  }
  return false
}

const checks = [
  (password: string) => checkPairs(password),
  (password: string) => checkForChars(password),
  (password: string) => checkConsecutive(password),
]

const part1 = (inputData: string) => {
  let password = inputData

  let valid = false
  while (!valid) {
    password = incrementPassword(password)
    valid = checks.every(c => {
      return c(password)
    })
  }
  return password
}

export default part1
