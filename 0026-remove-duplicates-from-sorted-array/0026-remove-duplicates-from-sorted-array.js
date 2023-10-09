/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let count = 0
    const auxArr = []
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] !== nums[i+1]) {
            auxArr.push(nums[i])
            count++
        }
    }

    for (let i = 0; i < auxArr.length; i++) {
        nums[i] = auxArr[i]
    }
    return count
};