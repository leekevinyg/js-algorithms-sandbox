import Graph from "./graph";

export const countComponents = (n : number, edges : number[][]) => {
    let visited = {};
    for (let i=0; i < n; i++) {
        visited[i] = false;
    }

    let graph : Graph = new Graph(n);
    for (let i=0; i < edges.length; i++) {
        // this adds an undirected edge into the graph
        graph.addEdge(edges[i]);
    }

    let componentCount = 0;
    for (let node=0; node < n; node++) {
        if (visited[node] === false) {
            graph.DFS(node, visited);
            componentCount++;
        }
    }
    return componentCount;
}