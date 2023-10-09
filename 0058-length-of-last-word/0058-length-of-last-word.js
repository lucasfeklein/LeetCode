/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const trimmedS = s.trim()
    const wordArr = trimmedS.split(' ')

    return wordArr[wordArr.length - 1].length
    
};