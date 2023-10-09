/**
 * @param {string} digits
 * @return {string[]}
 */

const dict = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
}

var letterCombinations = function(digits) {
    if (!digits) return []

    const result = []
    const lettersFirstDigit = dict[digits[0]]

    for (const letter of lettersFirstDigit) {
        result.push(letter)
    }

        for (let i = 1; i < digits.length; i++) {
            const lettersCurrDigit = dict[digits[i]]

            const auxResult = [...result]

            result.length = 0
            
            for (let j = 0; j < auxResult.length; j++) {
                for (const letter of lettersCurrDigit) {
                    result.push(auxResult[j] + letter)
                }
            }
        }
        
        return result
};

