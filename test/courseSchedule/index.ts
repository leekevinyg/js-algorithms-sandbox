import canFinishAllCourses from '../../src/courseSchedule/course-schedule';
import { Graph } from '../../src/courseSchedule/graph';
import { expect } from 'chai';

describe('Course Schedule problem', () => {
    it('returns true when passed an empty list of courses', () => {
      expect(canFinishAllCourses(0, null)).to.equal(true);
    });

    it('returns true when passed 1 course with 1 pre-req', () => {
        expect(canFinishAllCourses(2, [[1, 0]])).to.equal(true);
    });

    it('returns false when passed 2 courses that are pre-reqs of each other', () => {
        expect(canFinishAllCourses(2, [[1, 0], [0, 1]])).to.equal(false);
    });

    it('returns false when courses passed in form a cycle', () => {
        expect(canFinishAllCourses(3, [[1,0], [1,2], [0,1]])).to.equal(false);
        expect(canFinishAllCourses(4, [[0,1], [0, 2], [1,0], [2,0], [2,3], [3,3]])).to.equal(false);
    });

    it('returns true when passed a graph with no cycles, but a node that is reachable via 2 different paths', () => {
        expect(canFinishAllCourses(5, [[0, 3], [3, 4], [4, 2], [0, 1], [1, 2]])).to.equal(true);
    });

    it('returns false when passed a graph with a cycle, where the first node in edges list is not a root', () => {
        expect(canFinishAllCourses(5, [[2,0],[1,0],[3,1],[3,2],[1,3]])).to.equal(false);
    });
});

describe('Graph.isCyclicDFS() - passed start node is root', () => {
    it('returns false when passed a directed graph with no cycles but a node that is reachable by 2 paths', () => {
        // graph from https://stackoverflow.com/a/2869661/1718640
        const g = new Graph();
        const edges = [[0, 3], [3, 4], [4, 2], [0, 1], [1, 2]];
        for (let i=0; i<edges.length;i++) {
            g.addEdge(edges[i]);
        }
        const startNode = edges[0][0];

        expect(g.isCyclicDFS(startNode)).to.equal(false);
    });

    it('returns true when passed cyclic graphs', () => {
        const graphA = new Graph();
        const aEdges = [[0,1], [1,2], [2,0]];
        for (let i=0; i<aEdges.length;i++) {
            graphA.addEdge(aEdges[i]);
        }
        const startA = aEdges[0][0];
        expect(graphA.isCyclicDFS(startA)).to.equal(true);

        const graphB = new Graph();
        const bEdges = [[0,1], [0, 2], [1,0], [2,0], [2,3], [3,3]];
        for (let i=0; i<bEdges.length;i++) {
            graphB.addEdge(bEdges[i]);
        }
        const startB = bEdges[0][0];
        expect(graphB.isCyclicDFS(startB)).to.equal(true);

        const graphC = new Graph();
        const cEdges = [[1,0], [1,2], [0,1]];
        for (let i=0; i<cEdges.length;i++) {
            graphC.addEdge(cEdges[i]);
        }
        const startC = cEdges[0][0];
        expect(graphC.isCyclicDFS(startC)).to.equal(true);
    });
})
