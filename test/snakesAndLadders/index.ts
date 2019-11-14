import quickestWayUp from '../../src/snakesAndLadders/snakes-and-ladders';
import { expect } from 'chai';

describe('Snakes and ladders problem', () => {
    it('returns 1 when there is a ladder from the second position to the goal position', () => {
      const goalPos = 10;
      const snakesAndLadders = {
          2: goalPos
      };

      expect(quickestWayUp(snakesAndLadders, goalPos)).to.equal(1);
    });

    it('returns the least number of moves required to get to goal', () => {
        const goalPos = 30;
        const snakesAndLadders = {
            2: 21,
            4: 7,
            10: 25,
            19: 28,
            26: 0,
            20: 8,
            16: 3,
            18: 6,
        };
  
        expect(quickestWayUp(snakesAndLadders, goalPos)).to.equal(3);
      });
});