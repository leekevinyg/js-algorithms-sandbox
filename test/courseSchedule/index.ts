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

    it('returns false when passed 2 courses that are pre-reqs of each other', () => {
        expect(canFinishAllCourses(2, [[0, 1], [1, 0]])).to.equal(false);
    });

    it('returns false when courses passed in form a cycle', () => {
        expect(canFinishAllCourses(3, [[1,0], [1,2], [0,1]])).to.equal(false);
        expect(canFinishAllCourses(4, [[0,1], [0, 2], [1,0], [2,0], [2,3], [3,3]])).to.equal(false);
    });

    it('returns true when passed a graph with no cycles, but a node that is reachable via 2 different paths', () => {
        // graph from https://stackoverflow.com/a/2869661/1718640
        expect(canFinishAllCourses(5, [[0, 3], [3, 4], [4, 2], [0, 1], [1, 2]])).to.equal(true);
    });

    it('returns false when passed a graph with a cycle, where the first node in edges list is not a root', () => {
        expect(canFinishAllCourses(5, [[2,0],[1,0],[3,1],[3,2],[1,3]])).to.equal(false);
    });
});


describe('Topological sort', () => {
    it('sorts a DAG with 2 nodes', () => {
        const numNodes = 2;
        const graph = new Graph(numNodes);
        const edges = [[0,1]];
        for (let i=0; i < edges.length; i++) {
            graph.addEdge(edges[i]);
        }
        expect(graph.topoSort().toString()).to.equal([0,1].toString());
    });

    it('sorts a DAG with 5 nodes', () => {
        const numNodes = 5;
        const graph = new Graph(numNodes);
        const edges = [[0,1], [2,0], [2,3], [1,4], [3,1], [3,4], [0,3]];
        for (let i=0; i < edges.length; i++) {
            graph.addEdge(edges[i]);
        }
        expect(graph.topoSort().toString()).to.equal([2,0,3,1,4].toString());
    });

    it('sorts a DAG with a node reachable with 2 paths', () => {
        const numNodes = 5;
        const graph = new Graph(numNodes);
        const edges = [[0, 3], [3, 4], [4, 2], [0, 1], [1, 2]];
        for (let i=0; i < edges.length; i++) {
            graph.addEdge(edges[i]);
        }
        expect(graph.topoSort().toString()).to.equal([0, 1, 3, 4, 2].toString());
    });

    it('doesnt sort a cyclic graph', () => {
        const numNodes = 2;
        const graph = new Graph(numNodes);
        const edges = [[0,1], [1,0]];
        for (let i=0; i < edges.length; i++) {
            graph.addEdge(edges[i]);
        }
        expect(graph.topoSort()).to.equal(undefined);
    });
});
