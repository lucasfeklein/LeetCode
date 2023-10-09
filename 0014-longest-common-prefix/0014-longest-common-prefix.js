/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
   const firstWord = strs[0]
   let prefix = ''

   for (let i = 0; i < firstWord.length; i++) {
       const char = firstWord[i]
        if (!char) return ""
       for (let j = 1; j < strs.length; j++) {
           if (char !== strs[j][i]) return prefix
       }

       prefix += char
   }

   return prefix
};