/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const numberPlusOne = BigInt(digits.join('')) + BigInt(1)

    return numberPlusOne.toString().split('')
};