import canFinishAllCourses from '../../src/courseSchedule/course-schedule';
import { Graph } from '../../src/courseSchedule/graph';
import { expect } from 'chai';

describe('Course Schedule problem', () => {
    it('returns true when passed an empty list of courses', () => {
      expect(canFinishAllCourses(null)).to.equal(true);
    });

    it('returns true when passed 1 course with 1 pre-req', () => {
        expect(canFinishAllCourses([[1, 0]])).to.equal(true);
    });

    it('returns false when passed 2 courses that are pre-reqs of each other', () => {
        expect(canFinishAllCourses([[1, 0], [0, 1]])).to.equal(false);
    });
});

describe('Graph.isCyclicDFS()', () => {
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
    });
})
