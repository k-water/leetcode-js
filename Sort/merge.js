/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
let merge = function(nums1, m, nums2, n) {
    let len1 = m - 1,
      len2 = n - 1,
      pos = m + n - 1
    for(let i = pos; i >= 0; i--) {
      if (len2 < 0) break
      nums1[i] = nums1[len1] > nums2[len2] ? nums1[len1--] : nums2[len2--]
    }
};