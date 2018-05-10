/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
let intersect = function (nums1, nums2) {
  let res = []
  nums1.forEach(item => {
    let index = nums2.indexOf(item)
    if (index > -1) {
      res.push(item)
      nums2.splice(index, 1)
    }
  })
  return res
}