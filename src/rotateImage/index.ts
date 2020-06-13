/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
export const rotate = function(matrix : number[][]) : void {
    let N : number = matrix.length;
    
    let rowStart : number = 0;
    let rowEnd : number = N - 1;

    // flip the image along y axis
    while (rowStart < rowEnd) {
        // switch elements in the start row with the end row
        for (let col=0; col<N; col++) {
            let temp = matrix[rowStart][col];
            matrix[rowStart][col] = matrix[rowEnd][col];
            matrix[rowEnd][col] = temp;
        }
        rowStart++;
        rowEnd--;
    }
    
    // transpose matrix along the diagonal
    for (let row=0; row < N; row++) {
        for (let col=row; col < N; col++) {
            let temp = matrix[row][col];
            matrix[row][col] = matrix[col][row];
            matrix[col][row] = temp;
        }
    }
}