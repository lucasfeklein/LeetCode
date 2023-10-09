/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {

  let aux = 0

  for (let i = 0; i < t.length; i++) {
    
    if (s[aux] === t[i]) {
      aux++
    }
    
  }
  return aux === s.length
};