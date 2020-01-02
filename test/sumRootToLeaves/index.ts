import { sumNumbers } from '../../src/sumRootToLeaf/index';
import { expect } from 'chai';

describe('sun root to leaf', () => {
    it('properly sums up a root with 2 nodes', () => {
        const root = {
            val: 1,
            left: {
                val: 2,
                left: null,
                right: null,
            },
            right: {
                val: 3,
                left: null,
                right: null,
            }
        };
        expect(sumNumbers(root)).to.equal(25);
    });

    it('properly sums up a deeper tree with repeated node values', () => {
        const root = {
            val: 1,
            left: {
                val: 5,
                left: null,
                right: null,
            },
            right: {
                val: 1,
                left: {
                    val: 6,
                    left: null,
                    right: null,
                },
                right: null,
            }
        };
        expect(sumNumbers(root)).to.equal(131);
    });
});