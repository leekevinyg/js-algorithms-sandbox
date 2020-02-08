import { containerWithMostWater } from '../../src/containerWithMostWater/';
import { expect } from 'chai';

describe('Container with most water', () => {
    it('returns the max volume that can be trapped', () => {
      expect(containerWithMostWater([1, 1])).to.equal(1);
      expect(containerWithMostWater([1, 2, 4, 3])).to.equal(4);
    });
});