import { binaryTreePaths } from '../../src/binaryTreePaths/';
import { expect } from 'chai';

describe('Binary Tree Paths', () => {
    it('returns path of a tree with one node', () => {
        const node = {
            val: 1,
            left: null,
            right: null,
        };
        expect(binaryTreePaths(node).toString()).to.equal(["1"].toString());
    });
    it('returns path of a simple tree', () => {
        const node = {
            val: 1,
            left: {
                val: 2,
                right: null,
                left: {
                    val: 5,
                    left: null,
                    right: null,
                },
            },
            right: {
                val: 3,
                right: null,
                left: null,
            },
        };
        expect(binaryTreePaths(node).toString()).to.equal(["1->3", "1->2->5"].toString());
    });
});