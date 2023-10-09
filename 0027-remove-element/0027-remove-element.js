/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let indexSubstitute = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[indexSubstitute] = nums[i];
      indexSubstitute++;
    }
  }
  console.log(nums, indexSubstitute);

  return indexSubstitute;
};