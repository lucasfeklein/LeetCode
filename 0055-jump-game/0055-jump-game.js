/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if (nums.length <= 1 ) return true

    let maxJump = nums[0]

    for (let i = 0; i < nums.length; i++) {

        if (maxJump === i && nums[i] === 0) return false

        if (i + nums[i] > maxJump) {
            maxJump = i + nums[i]
        }

        if (maxJump >= nums.length - 1) return true
        
    }

    return false
};