import { Graph } from './graph';

function canFinishAllCourses(coursesAndPrereqs : number[][]) : boolean {
    let canFinishAllCourses : boolean = true;

    if (coursesAndPrereqs === null || coursesAndPrereqs.length === 0) {
        return true;
    }

    let graph : Graph = new Graph();
    // first add edges to our graph
    for (let i = 0; i < coursesAndPrereqs.length; i++) {
        graph.addEdge(coursesAndPrereqs[i]);
    }

    let startNode : number = coursesAndPrereqs[0][0];
    // traverse graph with DFS, and return true
    canFinishAllCourses = !graph.isCyclicDFS(startNode);
    return canFinishAllCourses;
}

export default canFinishAllCourses;