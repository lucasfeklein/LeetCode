/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const count = {}
    nums.forEach(num => count[num] = (count[num] || 0) + 1)
    const sortArray = Object.entries(count).sort((a, b) => b[1] - a[1])
    let answer = []
    for (i = 0; i < k; i++) {
        answer.push(sortArray[i][0])
    }
    return answer
};