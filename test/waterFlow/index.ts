import pacificAtlantic from '../../src/waterFlow/waterflow';
import { expect } from 'chai';

describe('Water Flow Problem', () => {
    it('return all nodes in a simple matrix - water can flow in all directions', () => {
      const matrix = [
          [0,0,0]
      ];

      expect(JSON.stringify(pacificAtlantic(matrix))).to.equal(JSON.stringify([[0,0], [0,1], [0,2]]));
    });

    it('return all nodes in a simple matrix - water can flow right and up', () => {
        const matrix = [
            [0,0,0],
            [1,1,1]
        ];
  
        expect(JSON.stringify(pacificAtlantic(matrix))).to.equal(
            JSON.stringify([[0,0], [0,1], [0,2], [1,0], [1,1], [1,2]])
        );
    });

    it('return nodes where water can flow to both atlantic and pacific oceans', () => {
        const matrix = [
            [1,2,2,3,5],
            [3,2,3,4,4],
            [2,4,5,3,1],
            [6,7,1,4,5],
            [5,1,1,2,4]
        ];

        expect(JSON.stringify(pacificAtlantic(matrix))).to.equal(
            JSON.stringify([[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]])
        );
    })
});