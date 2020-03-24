import Solution from '../../src/maxUniqueLengthOfConcatenatedString';
import { expect } from 'chai';

describe('max unique length of concatenated string', () => {
    it('returns the max unique length of an empty string', () => {
        let sltn = new Solution();
        expect(sltn.maxLength([])).to.equal(0);
    });
    it('returns the max unique length of subsequence in middle of array', () => {
        let sltn = new Solution();
        expect(sltn.maxLength(['un', 'iq', 'ue'])).to.equal(4);
        expect(sltn.maxLength(["s","sa","m","e","mu","ei"])).to.equal(6);
    });
})