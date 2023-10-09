/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        if (nums[left] === target || nums[right] === target) {
            return nums[left] === target ? left : right
        }

        left++
        right--
    }

    return -1
};