import Graph from './graph';
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
export const validTree = (n : number, edges : number[][]) => {
    // a tree has:
    //
    // 1) n-1 edges
    // 2) is fully connected
    // 3) is not cyclic

    const graph = new Graph(n);
    
    if (edges.length !== n-1) {
        // a tree must have n-1 edges
        return false;
    }
    
    for (let i=0; i < edges.length; i++) {
        graph.addEdge(edges[i]);
    }
    
    return graph.isConnectedAndACyclic();
};