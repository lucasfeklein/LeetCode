/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    strAux = s.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '').split(' ').join('');
    const lastPosition = strAux.length - 1
    for(let i = 0; i < strAux.length; i++) {
        if (strAux[i] !== strAux[lastPosition - i]) return false
    }
    return true
};