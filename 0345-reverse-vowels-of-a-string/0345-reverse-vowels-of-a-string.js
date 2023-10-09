/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E','I', 'O', 'U'])
    const sArray = s.split('')
    const reversedVowelsArr = []
    
    for (let i = sArray.length - 1; i >= 0; i--) {
        if (vowels.has(sArray[i])) {
            reversedVowelsArr.push(sArray[i])
        }
    }

    for (let i = 0; i < sArray.length; i++) {
        if(vowels.has(sArray[i])) {
            sArray[i] = reversedVowelsArr.shift()   
        }
    }

    return sArray.join('')
};