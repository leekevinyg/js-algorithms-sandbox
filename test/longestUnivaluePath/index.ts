import longestUnivaluePath from '../../src/longestUnivaluePath/longestUnivaluePath';
import { expect } from 'chai';

describe('longestUnivaluePath', () => {
    xit('returns 0 when passed an empty tree', () => {
        expect(longestUnivaluePath(null)).to.equal(0);
    });

    xit('returns the longest univalue path', () => {
        const root = {
            val: 5,
            left: {
                val: 4,
                left: {
                    val: 1,
                    left: null,
                    right: null
                },
                right: {
                    val: 1,
                    left: null,
                    right: null,
                }
            },
            right: {
                val: 5,
                left: null,
                right: {
                    val: 5,
                    left: null,
                    right: null,
                }
            }
        }
        expect(longestUnivaluePath(root)).to.equal(2);
    });

    it('returns the longest univalue path with 2 different length univalue paths on each side of the root', () => {
        const root = {
            val: 1,
            left: {
                val: 2,
                left: {
                    val: 2,
                    left: null,
                    right: null
                },
                right: {
                    val: 2,
                    left: null,
                    right: null,
                }
            },
            right: {
                val: 2,
                right: null,
                left: {
                    val: 2,
                    left: null,
                    right: null,
                }
            }
        }
        expect(longestUnivaluePath(root)).to.equal(2);
    });
});