import { getNumberOfIslandsDFS } from '../../src/numberOfIslands/islands-dfs';
import { getNumberOfIslandsUF } from '../../src/numberOfIslands/islands-union-find';
import { getNumberOfIslandsRecursiveDFS } from '../../src/numberOfIslands/islands-recursive-dfs';
import { expect } from 'chai';

describe('Number of Islands problem - DFS Solution', () => {
    it('returns 0 when passed a grid with no islands', () => {
      const grid = [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
      ];
      expect(getNumberOfIslandsDFS(grid)).to.equal(0);
    });

    it('returns 1 when passed a grid with all islands', () => {
      const grid = [
          [1, 1, 1, 1],
          [1, 1, 1, 1],
          [1, 1, 1, 1],
      ];
      expect(getNumberOfIslandsDFS(grid)).to.equal(1);
    });

    it('returns the number of islands present in grid with 1 island component', () => {
      const grid = [
          [1, 1, 0, 0],
          [1, 1, 0, 0],
          [1, 1, 0, 0],
      ];
      expect(getNumberOfIslandsDFS(grid)).to.equal(1);
    });

    it('returns the number of islands present in grid', () => {
      const grid = [
          [1, 1, 1, 1, 0],
          [1, 1, 0, 1, 0],
          [1, 1, 0, 0, 0],
          [0, 0, 0, 0, 0],
      ];
      expect(getNumberOfIslandsDFS(grid)).to.equal(1);
    });

    it('returns the number of islands present in grid with multiple water/multiple island components', () => {
      const grid = [
          [1, 0, 1, 1],
          [1, 0, 1, 0],
          [1, 1, 0, 1],
      ];
      expect(getNumberOfIslandsDFS(grid)).to.equal(3);
    });
});

describe('Number of Islands problem - Recursive DFS Solution', () => {
  it('returns 0 when passed a grid with no islands', () => {
    const grid = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];
    expect(getNumberOfIslandsRecursiveDFS(grid)).to.equal(0);
  });

  it('returns 1 when passed a grid with all islands', () => {
    const grid = [
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
    ];
    expect(getNumberOfIslandsRecursiveDFS(grid)).to.equal(1);
  });

  it('returns the number of islands present in grid with 1 island component', () => {
    const grid = [
        [1, 1, 0, 0],
        [1, 1, 0, 0],
        [1, 1, 0, 0],
    ];
    expect(getNumberOfIslandsRecursiveDFS(grid)).to.equal(1);
  });

  it('returns the number of islands present in grid', () => {
    const grid = [
        [1, 1, 1, 1, 0],
        [1, 1, 0, 1, 0],
        [1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0],
    ];
    expect(getNumberOfIslandsRecursiveDFS(grid)).to.equal(1);
  });

  it('returns the number of islands present in grid with multiple water/multiple island components', () => {
    const grid = [
        [1, 0, 1, 1],
        [1, 0, 1, 0],
        [1, 1, 0, 1],
    ];
    expect(getNumberOfIslandsRecursiveDFS(grid)).to.equal(3);
  });
});

xdescribe('Number of Islands problem - union find solution', () => {
    it('returns 0 when passed a grid with no islands', () => {
      const grid = [
          ['0', '0', '0'],
          ['0', '0', '0'],
          ['0', '0', '0'],
      ];
      expect(getNumberOfIslandsUF(grid)).to.equal(0);
    });

    it('returns 1 when passed a grid with all islands', () => {
      const grid = [
          ['1', '1', '1', '1'],
          ['1', '1', '1', '1'],
          ['1', '1', '1', '1'],
      ];
      expect(getNumberOfIslandsUF(grid)).to.equal(1);
    });

    it('returns the number of islands present in grid with multiple water/multiple island components', () => {
      const grid = [
          ['1', '0', '1', '1'],
          ['1', '0', '1', '0'],
          ['1', '1', '0', '1'],
      ];
      expect(getNumberOfIslandsUF(grid)).to.equal(3);
    });

    it('returns the number of islands present in the grid with a single island component connected through the middle', () => {
      const grid = [
        ['1', '1', '1'],
        ['0', '1', '0'],
        ['1', '1', '1'],
      ];
      expect(getNumberOfIslandsUF(grid)).to.equal(1);
    });
});