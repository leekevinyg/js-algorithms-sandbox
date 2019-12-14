import { Graph } from './graph';

function canFinishAllCourses(numCourses : number, prerequisites : number[][]) : boolean {
    if (prerequisites === null || prerequisites.length === 0) {
        return true;
    }

    let graph : Graph = new Graph(numCourses);
    for (let i = 0; i < prerequisites.length; i++) {
        graph.addEdge(prerequisites[i]);
    }

    let topoSortedArray = graph.topoSort();

    return topoSortedArray ? topoSortedArray.length > 0 : false;
}

export default canFinishAllCourses;