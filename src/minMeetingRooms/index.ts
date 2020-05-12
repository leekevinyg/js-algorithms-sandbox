/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    if (intervals.length === 0) {
        return 0;
    }
    
    if (intervals.length === 1) {
        return 1;
    }
    
    intervals.sort((a, b) => {
        if (a[0] < b[0]) {
            return 1;
        } else if (a[0] > b[0]) {
            return -1;
        }
        return 0;
    });
    
    // one entry is equivalent to one room.
    let bookings = [[intervals.pop()]];
    
    // start scheduling
    while (intervals.length > 0) {
        let interval = intervals.pop();
        let scheduled = false;
        // check if we can fit in an existing room
        for (let i=0; i<bookings.length; i++) {
            if (hasConflict(interval, bookings[i])) {
                continue;
            } else {
                bookings[i].push(interval);
                scheduled = true;
                break;
            }
        }
        // if we can't, then start a new room
        if (!scheduled) {
            bookings.push([interval]);
        }
    }
    return bookings.length;
};


const hasConflict = (i1, bookings) => {
    for (let i=0; i<bookings.length; i++) {
        if (overlap(bookings[i], i1)) {
            return true;
        }
    }
    return false;
}
const overlap = (i1, i2) => {
    // if the first intervals end time happens after the second intervals start time, then there's an overlap
    if (i1[1] > i2[0]) {
        return true;
    }
    return false;
}