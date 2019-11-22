import { sameTree } from '../../src/sameTree/sameTree';
import { expect } from 'chai';

describe('Same Tree', () => {
    it('returns true when passed same trees', () => {
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
      expect(sameTree(a, b)).to.equal(true);
    });

    it('returns false when passed different trees', () => {
        const a = {
            val: 2,
            left: null,
            right: {
                val: 4,
                left: null,
                right: null
            }
        };
        const b = {
          val: 2,
          left: {
              val: 3,
              left: null,
              right: null
          },
          right: {
              val: 4,
              left: null,
              right: null
          }
      }
        expect(sameTree(a, b)).to.equal(false);
      });
});
