/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum = 0
    let maxAvg = -10000
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < k + i; j++) {
            sum += nums[j]
        }
        if (maxAvg < sum/k) {
            maxAvg = sum/k
        }
        sum = 0
        if (i+1+k > nums.length) break
    }

    return maxAvg
};