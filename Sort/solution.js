/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
let solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    if (n <= 0) return 0
    let low = 1,
      high = n,
      mid = parseInt((low + high) >> 1)
    while(low < high) {
      if (isBadVersion(mid)) {
        high = mid
      } else {
        low = mid + 1
      }
      mid = parseInt((low + high) >> 1)      
    }
    return low
  };
};