/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {

    if(nums.length === 1 && nums[0] === target) {
        return [0, 0]
    }

    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)

        if (target === nums[mid]) {
            
            let start = mid;
            let end = mid;

            while (nums[start - 1] === target) {
                start--;
            }

            while (nums[end + 1] === target) {
                end++;
            }

            return [start, end];
        }

        if (target < nums[mid]) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return [-1, -1]
};
