/**
 * @param {number} n
 * @return {string[]}
 */
let fizzBuzz = function (n) {
  if (n === 1) {
    return ['1']
  }
  if (n === 2) {
    return ['1', '2']
  }
  let res = []
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      res.push('FizzBuzz')
    } else if (i % 5 === 0) {
      res.push('Buzz')
    } else if (i % 3 === 0) {
      res.push('Fizz')
    } else {
      res.push(i + '')
    }
  }
  return res
};