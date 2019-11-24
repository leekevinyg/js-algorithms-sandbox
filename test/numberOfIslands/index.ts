import { getNumberOfIslandsBFS } from '../../src/numberOfIslands/islands-bfs';
import { getNumberOfIslandsUF } from '../../src/numberOfIslands/islands-union-find';
import { expect } from 'chai';

describe('Number of Islands problem', () => {
    it('returns 0 when passed a grid with no islands', () => {
      const grid = [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
      ];
      expect(getNumberOfIslandsBFS(grid)).to.equal(0);
    });

    it('returns 1 when passed a grid with all islands', () => {
      const grid = [
          [1, 1, 1, 1],
          [1, 1, 1, 1],
          [1, 1, 1, 1],
      ];
      expect(getNumberOfIslandsBFS(grid)).to.equal(1);
    });

    it('returns the number of islands present in grid with 1 island component', () => {
      const grid = [
          [1, 1, 0, 0],
          [1, 1, 0, 0],
          [1, 1, 0, 0],
      ];
      expect(getNumberOfIslandsBFS(grid)).to.equal(1);
    });

    it('returns the number of islands present in grid', () => {
      const grid = [
          [1, 1, 1, 1, 0],
          [1, 1, 0, 1, 0],
          [1, 1, 0, 0, 0],
          [0, 0, 0, 0, 0],
      ];
      expect(getNumberOfIslandsBFS(grid)).to.equal(1);
    });

    it('returns the number of islands present in grid with multiple water/multiple island components', () => {
      const grid = [
          [1, 0, 1, 1],
          [1, 0, 1, 0],
          [1, 1, 0, 1],
      ];
      expect(getNumberOfIslandsBFS(grid)).to.equal(3);
    });
});

describe('Number of Islands problem - union find solution', () => {
    it('returns 0 when passed a grid with no islands', () => {
      const grid = [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
      ];
      expect(getNumberOfIslandsUF(grid)).to.equal(0);
    });

    it('returns 1 when passed a grid with all islands', () => {
      const grid = [
          [1, 1, 1, 1],
          [1, 1, 1, 1],
          [1, 1, 1, 1],
      ];
      expect(getNumberOfIslandsUF(grid)).to.equal(1);
    });

    it('returns the number of islands present in grid with multiple water/multiple island components', () => {
      const grid = [
          [1, 0, 1, 1],
          [1, 0, 1, 0],
          [1, 1, 0, 1],
      ];
      expect(getNumberOfIslandsUF(grid)).to.equal(3);
    });
});