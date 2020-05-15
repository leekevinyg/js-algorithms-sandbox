import { eraseOverlapIntervals_BruteForce, eraseOverlapIntervals_Greedy } from '../../src/nonOverlappingIntervals';
import { expect } from 'chai';

describe('erase overlapping intervals', () => {
    it('should return the min removals to make an array of non overlapping intervals', () => {
        expect(eraseOverlapIntervals_BruteForce([[1,2], [1,2]])).equal(1);
        expect(eraseOverlapIntervals_Greedy([[1,2], [1,2]])).equal(1);
        expect(eraseOverlapIntervals_BruteForce([[1,100],[11,22],[1,11],[2,12]])).equal(2);
        expect(eraseOverlapIntervals_Greedy([[1,100],[11,22],[1,11],[2,12]])).equal(2);
    });
});


