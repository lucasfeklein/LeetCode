/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let fmenos2 = 0
    let fmenos1 = 1
    let currF = 0

    for (let i = 0; i < n; i++) {
        currF = fmenos1 + fmenos2
        fmenos2 = fmenos1
        fmenos1 = currF
    }

    return currF
};