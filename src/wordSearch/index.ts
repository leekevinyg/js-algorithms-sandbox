/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
export const exist = function(board : string[][], word : string) : boolean {
    let maxRow : number = board.length;
    let maxCol : number = board[0].length;
    let found : boolean = false;

    const DFS = (row : number, col : number, word : string, abort : boolean) => {
        if (abort) return;
        if (board[row][col] === word.charAt(0)) {
            word = word.substr(1);
        }
        if (word.length === 0) {
            found = true;
        }
        
        // mark visisted
        let char : string = board[row][col];
        board[row][col] = undefined;
        
        let nextLetter : string = word.charAt(0);
        // look for neighbors
        if (col + 1 < maxCol && board[row][col + 1] === nextLetter) {
            DFS(row, col+1, word, found);
        }
        
        if (col - 1 >= 0 && board[row][col-1] === nextLetter) {
            DFS(row, col-1, word, found);
        }
        
        if (row + 1 < maxRow && board[row+1][col] === nextLetter) {
            DFS(row+1, col, word, found);
        }
        
        if (row - 1 >= 0 && board[row-1][col] === nextLetter) {
            DFS(row-1, col, word, found);
        }

        board[row][col] = char;
    }
    
    for (let row=0; row<maxRow; row++) {
        for (let col=0; col<maxCol; col++) {
            if (board[row][col] === word.charAt(0)) {
                DFS(row, col, word, found);
            }
        }
    }
    
    return found;
};