/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    
    const dictionary = {};

    for (let i = 0; i < s.length; i++) {
        if (dictionary[s[i]] === undefined) {
            dictionary[s[i]] = t[i];
        } else if (dictionary[s[i]] !== t[i]) {
            return false;
        }
    }

    // Ensure unique mapping
    const seenValues = new Set();
    for (const value of Object.values(dictionary)) {
        if (seenValues.has(value)) {
            return false;
        }
        seenValues.add(value);
    }

    return true;
};
