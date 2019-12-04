import { longestConsecutiveSequence_UF, longestConsecutiveSequence_BF } from '../../src/longestConsecutiveSequence/longest-consecutive-sequence';
import { expect } from 'chai';

describe('longestConsecutiveSequence - Union Find Solution', () => {
    it('returns 0 when passed an empty list', () => {
        expect(longestConsecutiveSequence_UF([])).to.equal(0);
    });
    
    it('returns size of list when passed consective sequence', () => {
      expect(longestConsecutiveSequence_UF([1,2,3,4])).to.equal(4);
    });

    it('returns longest consective sequence - even', () => {
      expect(longestConsecutiveSequence_UF([10,2,3,11])).to.equal(2);
    });

    it('returns longest consective sequence - odd', () => {
        expect(longestConsecutiveSequence_UF([18,16,3,11,1])).to.equal(1);
    });

    it('returns longest consective sequence - duplicates', () => {
        expect(longestConsecutiveSequence_UF([18,18,3,11,1])).to.equal(1);
    });

    it('returns longest consective sequence - duplicates 2', () => {
        expect(longestConsecutiveSequence_UF([18,18,17,11,1])).to.equal(2);
    });
});

describe('longestConsecutiveSequence - Brute Force Solution', () => {
    it('returns 0 when passed an empty list', () => {
        expect(longestConsecutiveSequence_BF([])).to.equal(0);
    });
    
    it('returns size of list when passed consective sequence', () => {
      expect(longestConsecutiveSequence_BF([1,2,3,4])).to.equal(4);
    });

    it('returns longest consective sequence - even', () => {
      expect(longestConsecutiveSequence_BF([10,2,3,11])).to.equal(2);
    });

    it('returns longest consective sequence - odd', () => {
        expect(longestConsecutiveSequence_BF([18,16,3,11,1])).to.equal(1);
    });

    it('returns longest consective sequence - duplicates', () => {
        expect(longestConsecutiveSequence_BF([18,18,3,11,1])).to.equal(1);
    });

    it('returns longest consective sequence - duplicates 2', () => {
        expect(longestConsecutiveSequence_BF([18,18,17,11,1])).to.equal(2);
    });
});