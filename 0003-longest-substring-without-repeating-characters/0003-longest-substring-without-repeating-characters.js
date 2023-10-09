/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) {
    return 0;
  }

  let answer = 1;

  for (let i = 0; i < s.length - 1; i++) {
    const stringSet = new Set();
    stringSet.add(s[i]);

    for (let j = i + 1; j < s.length; j++) {
      if (stringSet.has(s[j])) {
        break;
      }

      stringSet.add(s[j]);
      answer = Math.max(stringSet.size, answer);
    }
  }
 
  return answer;
};