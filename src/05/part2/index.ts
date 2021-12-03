const checks = [
  (data: string) => {
    const regex = /([a-z][a-z])[a-z]*\1/g
    const found = data.match(regex)
    const check = Boolean(found && found.length)
    return check
  },

  (data: string) => {
    const regex = /([a-z])[a-z]\1/g
    const found = data.match(regex)
    const check = Boolean(found && found.length)
    return check
  },
]
// var repeat=str.match(/([a-z][a-z])[a-z]*\1/);
//   var zxz=str.match(/([a-z])[a-z]\1/);
// function hasRepeatedPair(str) {
// 	return _.any(str, function(letter, i) {
// 		if (i < 1) return false;

// 		var key = str.substring(i - 1, i + 1),
// 			prestr = str.substring(0, i - 1),
// 			posstr = str.substring(i + 1);
// 		return ~prestr.indexOf(key) || ~posstr.indexOf(key);
// 	});
// }

// function hasABA(str) {
// 	return _.any(str, function(letter, i) {
// 		if (i < 2) return false;

// 		return letter == str[i - 2];
// 	});
// }

const part2 = (inputData: string[]) => {
  const nice = inputData.filter(d => {
    return checks.every(c => c(d))
  })

  return nice.length
}

export default part2
