/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const reverseArr = []
    const xArr = x.toString().split('')
    for (let i = 0; i < xArr.length; i++) {
        reverseArr.push(xArr[xArr.length - 1 - i])
    }

    return reverseArr.join('') === xArr.join('')
};