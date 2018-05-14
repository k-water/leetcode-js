/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// let strStr = function (haystack, needle) {
//   if (needle.length === 0) return 0
//   let next = (function (needle) {
//     let len = needle.length,
//       k = -1,
//       j = 0
//     let next = new Array(len)
//     next[0] = -1
//     while (j < len -  1) {
//       if (k === -1 || needle[j] === needle[k]) {
//         j++
//         k++
//         if (needle[j] !== needle[k]) {
//           next[j] = k
//         } else {
//           next[j] = next[k]
//         }
//       } else {
//         k = next[k]
//       }
//     }
//     return next
//   })(needle)
//   console.log(next)
//   let haylen = haystack.length,
//     sublen = needle.length,
//     index = 0,
//     i = 0,
//     j = 0
//   if (haylen < sublen) return -1
//   while (i < haylen && j < sublen) {
//     if (j === -1 || haystack.charAt(i) === needle.charAt(j)) {
//       i++;
//       j++;
//     } else {
//       j = next[j]
//     }
//   }
//   if (j >= sublen) {
//     index = i - j
//     return index
//   } else {
//     return -1
//   }
// }
let strStr = function (haystack, needle) {
  if (needle.length === 0) return 0
  let index = haystack.indexOf(needle)
  return index > -1 ? index : -1
}
console.log(strStr("aabaaabaaac", "aabaaac"))