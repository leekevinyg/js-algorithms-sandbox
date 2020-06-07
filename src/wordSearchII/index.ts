/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = function(board, words) {
    let output = [];
    let maxRow = board.length;
    let maxCol = board[0].length;
    let nodeMap = {};
    
    const DFS = (row, col, board, word) => {
        let path = '';
        let stack = [{
            row,
            col,
        }];
        
        while (stack.length > 0) {
            let node = stack.pop();
            let { row, col } = node;
            nodeMap[`${row},${col}`] = true;
            if (board[row][col] === word[0]) {
                // found the next letter!
                word = word.substr(1);
            }
            if (word.length === 0) {
                return true;
            }
            let validNeighbors = getValidNeighbors(row, col, board, word);
            for (let i=0; i<validNeighbors.length; i++) {
                stack.push(validNeighbors[i]);
            }
        }
        return false;
    }
    
    const getValidNeighbors = (row, col, board, word) => {
        let validNeighbors = [];
        
        const nextLetter = word[0];
        
        // bottom neighbor
        if (row + 1 < maxRow && board[row + 1][col] === nextLetter &&
           nodeMap[`${row + 1},${col}`] === undefined) {
            validNeighbors.push({
                row: row + 1,
                col,
            });
        }
        
        // top neighbor
        if (row - 1 >= 0 && board[row - 1][col] === nextLetter &&
           !!nodeMap[`${row - 1},${col}`] === undefined) {
            validNeighbors.push({
                row: row - 1,
                col,
            })
        }
         
        // right neighbor
        if (col + 1 < maxCol && board[row][col + 1] === nextLetter && 
           nodeMap[`${row},${col+1}`] === undefined) {
            validNeighbors.push({
                row,
                col: col + 1,
            });
        }
        
        // left neighbor
        if (col - 1 >= 0 && board[row][col-1] === nextLetter && 
           nodeMap[`${row},${col-1}`] === undefined) {
            validNeighbors.push({
                row,
                col: col-1,
            });
        }
        
        return validNeighbors;
    }

    const search = (startLetter, word) => {
        nodeMap = {};
        let found = false;
        for (let row=0; row<maxRow; row++) {
            for (let col=0; col < maxCol; col++) {
                let letter = board[row][col];
                if (letter === startLetter) {
                    found = DFS(row, col, board, word);
                }
            }
        }
        return found;
    }
    
    for (let i=0; i<words.length; i++) {
        let word = words[i];
        let startLetter = word[0];
        let found = search(startLetter, word);
        if (found) {
            output.push(word);
        }
    }
    
    return output;
};
