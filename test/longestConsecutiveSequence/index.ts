import { longestConsecutiveSequence } from '../../src/longestConsecutiveSequence/longest-consecutive-sequence';
import { expect } from 'chai';

describe('longestConsecutiveSequence', () => {
    it('returns 0 when passed an empty list', () => {
        expect(longestConsecutiveSequence([])).to.equal(0);
    });
    
    it('returns size of list when passed consective sequence', () => {
      expect(longestConsecutiveSequence([1,2,3,4])).to.equal(4);
    });

    it('returns longest consective sequence - even', () => {
      expect(longestConsecutiveSequence([10,2,3,11])).to.equal(2);
    });

    it('returns longest consective sequence - odd', () => {
        expect(longestConsecutiveSequence([18,16,3,11,1])).to.equal(1);
    });

    it('returns longest consective sequence - duplicates', () => {
        expect(longestConsecutiveSequence([18,18,3,11,1])).to.equal(1);
    });

    it('returns longest consective sequence - duplicates 2', () => {
        expect(longestConsecutiveSequence([18,18,17,11,1])).to.equal(2);
    });
});