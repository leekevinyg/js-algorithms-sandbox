import Graph from './graph';

/**
 * @param {string[]} words
 * @return {string}
 */
export const alienOrder = (words : string[]) : string => {
    // Parse the words array into directed graph edges a -> b, where a alphabetically preceds b.
    const edges : string[][] = generateEdges(words);

    // Construct a graph from the lexographically ordered edges.
    const graph : Graph = new Graph();
    for (let i=0; i < edges.length; i++) {
        graph.addEdge(edges[i]);
    }

    // Topologically sort the graph (return [] if a cycle is found)
    const topoSorted = graph.topoSort();

    if (topoSorted.length === 0) {
        return '';
    }

    return topoSorted;
}

export const generateEdges = (words : string[]) : string[][] => {
    const edges : string[][] = [];
    const maxRows : number = words.length;

    for (let row=0; row < maxRows; row++) {
        let currentWord = words[row];
        let nextWord = row + 1 < maxRows ? words[row + 1] : null;

        if (!nextWord) continue; // nothing to compare

        // establish precendence relationship between letters only if preceding letters have been the same 
        // up until that point
        let maxCols = currentWord.length > nextWord.length ? nextWord.length : currentWord.length;
        for (let i=0; i < maxCols; i++) {
            if (currentWord[i] === nextWord[i]) {
                continue;
            } else {
                edges.push([currentWord[i], nextWord[i]]);
                break;
            }
        }
    }
    return edges;
}