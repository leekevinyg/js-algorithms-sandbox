import { longestUnivaluePath } from '../../src/longestUnivaluePath/longestUnivaluePath';
import { expect } from 'chai';

describe('longestUnivaluePath', () => {
    it('returns 0 when passed an empty tree', () => {
        expect(longestUnivaluePath(null)).to.equal(0);
    });

    it('returns 0 when passed a simple tree with no univalue path present', () => {
        const tree = {
            val: 2,
            left: {
                val: 1,
                left: null,
                right: null,
            },
            right: {
                val: 1,
                left: null,
                right: null,
            }
        }
        expect(longestUnivaluePath(tree)).to.equal(0);
    });

    it('returns 1 when passed a simple 3 node tree with 2 same values', () => {
        const tree = {
            val: 2,
            left: {
                val: 2,
                left: null,
                right: null,
            },
            right: {
                val: 1,
                left: null,
                right: null,
            }
        }
        expect(longestUnivaluePath(tree)).to.equal(1);
    })

    it('returns 2 when passed a simple 3 node tree with all the same value', () => {
        const tree = {
            val: 2,
            left: {
                val: 2,
                left: null,
                right: null,
            },
            right: {
                val: 2,
                left: null,
                right: null,
            }
        }
        expect(longestUnivaluePath(tree)).to.equal(2);
    });

    it('returns the correct longest univalue path when passed a more complicated tree', () => {
        const tree = {
            val: 2,
            left: {
                val: 2,
                left: {
                    val: 2,
                    left: null,
                    right: null,
                },
                right: {
                    val: 2,
                    left: null,
                    right: null,
                },
            },
            right: {
                val: 1,
                left: null,
                right: null,
            }
        }
        expect(longestUnivaluePath(tree)).to.equal(2);
    });
});