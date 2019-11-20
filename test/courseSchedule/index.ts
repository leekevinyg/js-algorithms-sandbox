import canFinishAllCourses from '../../src/courseSchedule/course-schedule';
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

    it('returns true when passed a directed graph with no cycles but a node that is reachable by 2 paths', () => {
        // graph from https://stackoverflow.com/a/2869661/1718640
        expect(canFinishAllCourses([[0, 3], [3, 4], [4, 2], [0, 1], [1, 2]])).to.equal(true);
    });

    it('returns false when passed a cyclic graph', () => {
        expect(canFinishAllCourses([[0,1], [1,2], [2,0]])).to.equal(false);
        expect(canFinishAllCourses([[0,1], [0, 2], [1,0], [2,0], [2,3], [3,3]])).to.equal(false);
    });

    it('can handle disconnected graphs?', () => {

    });
});
