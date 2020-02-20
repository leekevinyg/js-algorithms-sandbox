import { maxPathSum } from '../../src/maxPathSumBinaryTree/maxPathSumBinaryTree';
import { expect } from 'chai';

xdescribe('maxPathSum', () => {
    it('returns 0 when passed an empty tree', () => {
        expect(maxPathSum(null)).to.equal(0);
    });
    it('returns sum of entire tree when appropriate', () => {
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
                right: null
            }
        }
        expect(maxPathSum(tree)).to.equal(4);
    });

    it('returns max sum of tree', () => {
        const tree = {
            val: -10,
            left: {
                val: 9,
                left: null,
                right: null,
            },
            right: {
                val: 20,
                left: {
                    val: 15,
                    left: null,
                    right: null,
                },
                right: {
                    val: 7,
                    left: null,
                    right: null,
                }
            }
        }
        expect(maxPathSum(tree)).to.equal(42);
    });
    it('returns max sum of tree with a single negative value', () => {
        const tree = {
            val: -3,
            left: null,
            right: null,
        }
        expect(maxPathSum(tree)).to.equal(-3);
    });
    it('returns max sum of tree with a single value of 0', () => {
        const tree = {
            val: 0,
            left: null,
            right: null,
        }
        expect(maxPathSum(tree)).to.equal(0);
    });
});