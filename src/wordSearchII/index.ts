import { Trie } from '../implementTrie';
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
export const findWords = function(board : string[][], words : string[]) : string[] {
    let output : string[] = [];
    
    let trie : Trie = new Trie();
    
    for (let i=0; i<words.length; i++) {
        trie.insert(words[i]);
    }
    
    let maxRow : number = board.length;
    let maxCol : number = board[0].length;
    
    const DFS = (row, col, path) => {
        
        let char = board[row][col];
        path+=char;

        if (trie.search(path)) {
            // todo check if we have any duplicates
            if (!output.includes(path)) output.push(path);
        }
        
        // mark current position as visited
        board[row][col] = undefined;
        
        if (row + 1 < maxRow && board[row+1][col] !== undefined) {
            let newWord = path + board[row+1][col];
            if (trie.startsWith(newWord)) {
                DFS(row+1, col, path)
            }
        }
        
        if (row - 1 >= 0 && board[row-1][col] !== undefined) {
            let newWord = path + board[row-1][col];
            if (trie.startsWith(newWord)) {
                DFS(row-1, col, path)
            }
        }
        
        if (col + 1 < maxCol && board[row][col+1] !== undefined) {
            let newWord = path + board[row][col+1];
            if (trie.startsWith(newWord)) {
                DFS(row, col+1, path);
            }
        }
        
        if (col - 1 >= 0 && board[row][col-1] !== undefined) {
            let newWord = path + board[row][col-1];
            if (trie.startsWith(newWord)) {
                DFS(row, col-1, path);
            }
        }
        board[row][col] = char;
    }

    for (let row=0; row<maxRow; row++) {
        for (let col=0; col<maxCol; col++) {
            DFS(row, col, '');
        }
    }
    return output;
};