const DFS = (row: number, column: number, matrix: number[][], visited: boolean[][]) => {
    const totalRows = matrix.length;
    const totalColumns = matrix[0] ? matrix[0].length : 0;
    const stack = [[row, column]];

    while (stack.length > 0) {
        let currentNode = stack.pop();
        let x = currentNode[0];
        let y = currentNode[1];

        if (visited[x][y]) {
            continue;
        }

        visited[x][y] = true;
        let currentValue = matrix[x][y];
        let rightValue = y + 1 < totalColumns ? matrix[x][y+1] : null;
        let leftValue = y - 1 >= 0 ? matrix[x][y-1] : null;
        let topValue = x - 1 >= 0 ? matrix[x-1][y] : null;
        let bottomValue = x + 1 < totalRows ? matrix[x+1][y] : null;

        if (typeof leftValue === "number" && leftValue >= currentValue) {
            stack.push([x, y - 1]);
        }
        if (typeof rightValue === "number" && rightValue >= currentValue) {
            stack.push([x, y + 1]);
        }
        if (typeof topValue === "number" && topValue >= currentValue) {
            stack.push([x - 1, y]);
        }
        if (typeof bottomValue === "number" && bottomValue >= currentValue) {
            stack.push([x + 1, y]);
        }
    }

    return visited;
}


const pacificAtlantic = (matrix : number[][]) : number[][] => {
    if (matrix === null || matrix.length === 0 || matrix[0].length === 0) {
        return [];
    }

    const positions = [];
    const totalRows = matrix.length;
    const totalColumns = matrix[0] ? matrix[0].length : 0;

    let visitedPacific : boolean[][] = [...Array(totalRows)].map(x => Array(totalColumns).fill(false));
    let visitedAtlantic : boolean[][] = [...Array(totalRows)].map(x => Array(totalColumns).fill(false));

    // Start DFS from the top Pacific ocean nodes and bottom Atlantic ocean nodes
    for (let column=0; column < totalColumns; column++) {
        visitedPacific = DFS(0, column, matrix, visitedPacific);
        visitedAtlantic = DFS(totalRows - 1, column, matrix, visitedAtlantic); 
    }

    // Start DFS from the left Pacific ocean nodes and right Atlantic ocean nodes
    for (let row=0; row < totalRows; row++) {
        visitedPacific = DFS(row, 0, matrix, visitedPacific);
        visitedAtlantic = DFS(row, totalColumns - 1, matrix, visitedAtlantic);
    }

    for (let row=0; row < totalRows; row++) {
        for (let column=0; column < totalColumns; column++) {
            if (visitedPacific[row][column] && visitedAtlantic[row][column]) {
                positions.push([row, column]);
            }
         }
    }
    return positions;
}

export default pacificAtlantic;