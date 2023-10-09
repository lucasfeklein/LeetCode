/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stackArr = []
    const closingTags = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for (let i = 0; i < s.length; i++) {
        tag = s[i]
        if (tag in closingTags) {
            stackArr.push(tag)
        } else {
            const stackTag = stackArr.pop()
            if(closingTags[stackTag] !== tag) {
                return false
            }
        }
    }

    return stackArr.length === 0 ? true : false
};