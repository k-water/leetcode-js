/**
 * @param {number[]} nums
 */
let Solution = function(nums) {
  this.nums = nums || [];
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  let copy = this.nums.slice(),
    n = copy.length,
    random = null;
  while (n !== 0) {
    random = Math.floor(Math.random() * n--);
    [copy[n], copy[random]] = [copy[random], copy[n]];
  }
  return copy;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
