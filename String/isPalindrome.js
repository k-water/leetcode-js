/**
 * @param {string} s
 * @return {boolean}
 */
let isPalindrome = function (s) {
  if (s.length === 0) return true
  let space = s.split('').every(v => v === ' ')
  if(space) return true
  let str = s.match(/[A-Za-z]|\d/g)
  if(!str) return true
  return str.join('').toLowerCase() === str.reverse().join('').toLowerCase()
} 
console.log(isPalindrome("!043XjqjX043!"))