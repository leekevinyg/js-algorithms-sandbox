import { countUnivalSubtrees } from '../../src/univalueSubtrees';
import { expect } from 'chai';

describe('count univalue subtrees', () => {
    it('should count univalue subtrees', () => {
        let root = {
            val: 5,
            left: {
                val: 1,
                left: {
                    val: 5,
                    left: null,
                    right: null,
                },
                right: {
                    val: 5,
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
            },
        };
        expect(countUnivalSubtrees(root)).to.equal(4);
    })
})