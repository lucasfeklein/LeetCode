/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const n = nums.length;
    nums.sort((a, b) => a - b);
    const result = [];

    for (let i = 0; i < n - 2; i++) {
        if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {  // Skip duplicates
            let left = i + 1;
            let right = n - 1;
            const target = -nums[i];

            while (left < right) {
                const sum = nums[left] + nums[right];

                if (sum === target) {
                    result.push([nums[i], nums[left], nums[right]]);
                    while (left < right && nums[left] === nums[left + 1]) left++;  // Skip duplicates
                    while (left < right && nums[right] === nums[right - 1]) right--;  // Skip duplicates
                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return result;
};
