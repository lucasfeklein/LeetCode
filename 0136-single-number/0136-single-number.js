/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const numsSet = new Set()

    for (let i = 0; i < nums.length; i++) {
      if (!numsSet.has(nums[i])) {
        numsSet.add(nums[i])
      } else {
        numsSet.delete(nums[i])
      }
    }
    return [...numsSet][0]
};