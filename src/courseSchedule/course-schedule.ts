import { Graph } from './graph';

function canFinishAllCourses(coursesAndPrereqs : number[][]) : boolean {
    if (coursesAndPrereqs === null || coursesAndPrereqs.length === 0) {
        return true;
    }

    let graph : Graph = new Graph();
    for (let i = 0; i < coursesAndPrereqs.length; i++) {
        graph.addEdge(coursesAndPrereqs[i]);
    }

    let startNode : number = coursesAndPrereqs[0][0];
    if (graph.isCyclicDFS(startNode)) {
        return false;
    }
    return true;
}

export default canFinishAllCourses;