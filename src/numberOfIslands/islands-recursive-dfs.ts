export const getNumberOfIslandsRecursiveDFS = (graph : number[][]) : number => {
    if (graph === undefined || graph === null || graph.length === 0) {
        return 0;
    }

    const totalRows = graph.length;
    const totalCols = graph[0] && graph[0].length;
    let islandCount = 0;

    const DFS = (row : number, col: number) => {
        if (row < 0 || col < 0 || row === totalRows || col === totalCols || graph[row][col] === 0) {
            return;
        }
        graph[row][col] = 0;
        DFS(row + 1, col);
        DFS(row - 1, col);
        DFS(row, col + 1);
        DFS(row, col - 1);
    }

    for (let row = 0; row < totalRows; row++) {
        for (let col = 0; col < totalCols; col++) {
            if (graph[row][col] === 1) {
                DFS(row, col);
                islandCount++;
            }
        }
    }

    return islandCount;
}

