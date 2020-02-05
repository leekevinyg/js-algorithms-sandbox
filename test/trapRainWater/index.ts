import { trap } from '../../src/trapRainWater/';
import { expect } from 'chai';

describe('trapping rain water', () => {
    it('returns 0 when provided an empty array', () => {
        expect(trap([])).to.equal(0);
    });

    it('returns trappable area for a simple cases (no bars inbetween edge of buckets, just a single bucket)', () => {
        expect(trap([0, 1, 0, 1])).to.equal(1);
        expect(trap([3, 0, 0, 4])).to.equal(6);
        expect(trap([0, 1, 0, 0, 0, 4])).to.equal(3);
        expect(trap([4, 0, 3])).to.equal(3);
    });

    it('returns trappable area for a simple cases (no bars inbetween edge of buckets, multiple buckets)', () => {
        expect(trap([0, 1, 0, 1, 0, 1])).to.equal(2);
        expect(trap([3, 0, 0, 4, 0, 1])).to.equal(7);
        expect(trap([0, 1, 0, 0, 0, 4, 0, 4])).to.equal(7);
    });

    it('returns no trappable area when there is a single bucket but bucket edges are right next to each other', () => {
        expect(trap([0, 1, 1])).to.equal(0);
        expect(trap([0, 3, 4])).to.equal(0);
    });

    it('returns trappable area for simple cases when there is a bar in the middle of the bucket', () => {
        expect(trap([2, 1, 2])).to.equal(1);
    })

    xit('returns trappable area', () => {
        expect(trap([0,1,0,2,1,0,1,3,2,1,2,1])).to.equal(6);
    });
});
