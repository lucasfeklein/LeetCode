/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for (let i = 0; i < 9; i++) {

        const rowSet = new Set()
        const columnSet = new Set()

        for (let j = 0; j < 9; j++) {

            if (columnSet.has(board[j][i])) return false
            if (rowSet.has(board[i][j])) return false
            
            // Check rows
            if (board[i][j] !== ".") {
                rowSet.add(board[i][j])
            } 

            //Check columns
            if (board[j][i] !== ".") {
                columnSet.add(board[j][i])
            }

            // Check 3x3 sub-boxes
            if (i%3 === 0 && j%3 === 0) {
                const boxSet = new Set()
                for (let x = i; x < i + 3; x++) {
                    for (let y = j; y < j + 3; y++) {
                        if (boxSet.has(board[x][y])) return false

                        if(board[x][y] !== '.') boxSet.add(board[x][y])
                    }
                }
            }

        }
    }
    return true
};