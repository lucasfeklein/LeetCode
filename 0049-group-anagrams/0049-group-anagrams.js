/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const sortString = (str) => str.split('').sort().join('')

var groupAnagrams = function(strs) {
    const arrayObj = {}

    for (let i = 0; i < strs.length; i++) {
        sortedWord = sortString(strs[i])

        if(!arrayObj[sortedWord]) {
            arrayObj[sortedWord] = [strs[i]]
        } else {
            arrayObj[sortedWord].push(strs[i])
        }
    }
    return Object.values(arrayObj)
};







