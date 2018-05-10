/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/** O(nk)
 let rotate = function (nums, k) {
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop())
  }
}
*/
/** O(nk)
let rotate = function (nums, k) {
  let len = nums.length
  let newK = k % len
  let temp
  for (let i = 0; i < newK; i++) {
    temp = nums[len - 1]
    for(let j = len - 2; j >= 0; j--) {
      nums[j + 1] = nums[j] 
    }
    nums[0] = temp
  }
  // return nums
}
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))
*/
/** On
let rotate = function (nums, k) {
  function reverse(nums, left, right) {
    for (; left < right; left++, right--) {
      [nums[left], nums[right]] = [nums[right], nums[left]]
    }
  }
  let len = nums.length
  k %= len
  reverse(nums, 0, len - k - 1)
  reverse(nums, len - k, len - 1)
  reverse(nums, 0, len - 1)
}
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))
*/

// http://blog.thpiano.com/?p=251
let gcd = function (m, n) {
  let res
  while (res = m % n) {
    m = n
    n = res
  }
  return n
}

let rotate = function (nums, k) {
  let len = nums.length
  k = len - (k % len)
  for (let i = 0, cnt = gcd(len, k); i < cnt; i++) {
    let temp = nums[i],
      pos = i,
      j = (k + i) % len
    while (j != i) {
      nums[pos] = nums[j]
      pos = j
      j = (k + pos) % len
    }
    nums[pos] = temp
    console.log(nums)
  }
  return nums
}
console.log(rotate([1, 2, 3, 4, 5, 6], 4))