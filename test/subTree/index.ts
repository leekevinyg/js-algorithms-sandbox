import { subTree } from '../../src/subTree/subTree';
import { expect } from 'chai';

describe('Sub Tree', () => {
    it('returns true when passed itself', () => {
      const a = {
          val: 1,
          left: {
              val: 2,
              left: null,
              right: null
          },
          right: {
              val: 3,
              left: null,
              right: null
          }
      };
      const b = {
        val: 1,
        left: {
            val: 2,
            left: null,
            right: null
        },
        right: {
            val: 3,
            left: null,
            right: null
        }
    }
      expect(subTree(a, b)).to.equal(true);
    });

    it('returns true when passed a subtree of 1 node', () => {
        const a = {
            val: 1,
            left: {
                val: 1,
                left: null,
                right: null
            },
            right: null
        };
        const b = {
          val: 1,
          left: null,
          right: null
      }
        expect(subTree(a, b)).to.equal(true);
    });
  

    it('returns false when passed an incomplete subtree', () => {
        const a = {
            val: 3,
            left: {
                val: 4,
                left: {
                    val: 1,
                    left: {
                        val: 0,
                        left: null,
                        right: null
                    },
                    right: null,
                },
                right: {
                    val: 2,
                    left: null,
                    right: null
                }
            },
            right: {
                val: 5,
                left: null,
                right: null
            }
        };
        const b = {
          val: 4,
          left: {
              val: 1,
              left: null,
              right: null
          },
          right: {
              val: 2,
              left: null,
              right: null
          }
      }
        expect(subTree(a, b)).to.equal(false);
    });
});