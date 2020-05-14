import { MinPriorityQueue } from '../../src/minMeetingRooms/priority-queue';
import { expect } from 'chai';

describe('Priority Queue', () => {
    it('should return undefined when peeked with no elements', () => {
        const pqueue = new MinPriorityQueue();
        expect(pqueue.isEmpty()).equal(true);
        expect(pqueue.peek()).equal(undefined);
    });

    it.only('should return the minimum item in the queue', () => {
        const pqueue = new MinPriorityQueue();
        pqueue.insert({
            priority: 10,
        });
        pqueue.insert({
            priority: 20,
        });
        pqueue.insert({
            priority: 1,
        });
        pqueue.insert({
            priority: 2,
        });
        expect(pqueue.peek().priority).equal(1);
        pqueue.remove();
        expect(pqueue.peek().priority).equal(2);
    });
});