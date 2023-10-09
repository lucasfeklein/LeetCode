/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const auxArr = []

    for (let i = 0; i < nums.length; i++) {
        if (auxArr.includes(nums[i])) {
            return true; 
        }
        auxArr.push(nums[i]);
    }

    return false;
};