/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function (nums) {
  if (nums.length === 1) return nums[0];
  const countObj = {};
  let majorityEl = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (countObj[nums[i]]) {
      countObj[nums[i]]++;
      majorityEl =
        countObj[majorityEl] < countObj[nums[i]] ? nums[i] : majorityEl;
    } else {
      countObj[nums[i]] = 1;
    }
  }
  return majorityEl;
};