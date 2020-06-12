import { levelOrder } from '../../src/levelOrderTraversal';
import { expect } from 'chai';

describe('level order traversal', () => {
    it('should return the level order trvaersal of a binary tree', () => {
        let root = {
            val: 3,
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
        };
        expect(levelOrder(root).length).to.equal(3);
    });
});