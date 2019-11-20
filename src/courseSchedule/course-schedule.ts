import { Graph } from './graph';

function canFinishAllCourses(numCourses : number, prerequisites : number[][]) : boolean {
    if (prerequisites === null || prerequisites.length === 0) {
        return true;
    }

    let graph : Graph = new Graph();
    for (let i = 0; i < prerequisites.length; i++) {
        graph.addEdge(prerequisites[i]);
    }

    for (let node=0; node < numCourses - 1; node++) {
        if (graph.isCyclicDFS(node)) {
            return false;
        }
    }
    return true;
}

export default canFinishAllCourses;