import { MinPriorityQueue } from '../../src/minMeetingRooms/priority-queue';
import { minMeetingRooms } from '../../src/minMeetingRooms/index';
import { expect } from 'chai';

describe('Priority Queue', () => {
    it('should return undefined when peeked with no elements', () => {
        const pqueue = new MinPriorityQueue();
        expect(pqueue.isEmpty()).equal(true);
        expect(pqueue.peek()).equal(undefined);
    });

    it('should return the minimum item in the queue', () => {
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


    it('should be able remove all items in a heap of size 2', () => {
        const pqueue = new MinPriorityQueue();
        pqueue.insert({
            priority: 10,
        });
        pqueue.insert({
            priority: 20,
        });
        expect(pqueue.remove().priority).equal(10);
        pqueue.remove();
        expect(pqueue.peek()).equal(undefined);
    });
});

describe('Min Meeting Rooms', () => {
    it('should return min meeting rooms required - 2 insert swaps', () => {
        expect(minMeetingRooms([[1905,4041],[1956,5996],[2610,5351],[2047,2967],[3553,5304],[232,5874]])).equal(5);
    });
    it('should return the min meeting rooms required', () => {
        expect(minMeetingRooms([[490,946],[132,833],[677,836],[77,995],[499,585],[72,883],[863,900],[193,981]])).equal(6);
    });
});