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
});