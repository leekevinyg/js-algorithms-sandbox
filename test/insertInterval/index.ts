import { insert } from '../../src/insertInterval';
import { expect } from 'chai';

describe('insert interval', () => {
    it('inserts (and merges as necessary) a new interval into a sorted list of intervals', () => {
        let intervals = [[1,2], [5,6], [7,8]];
        let newInterval = [3,8];
        let expectedInterval = [[1,2], [3,8]].toString();
        expect(insert(intervals, newInterval).toString()).equal(expectedInterval);
    });
})