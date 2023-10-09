/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    const lastPosition = numbers.length
    for (let i = 0; i < lastPosition - 1; i++) {
        for (let j = i + 1; j < lastPosition; j++) {
            if (numbers[i] + numbers[j] === target) return new Array(i + 1, j + 1)
        }
    }
    return []
};