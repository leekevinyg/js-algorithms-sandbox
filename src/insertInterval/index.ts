export const insert = function(intervals : number[][], newInterval : number[]) : number[][] {
    if (!newInterval || newInterval.length === 0) return intervals;
    if (intervals.length === 0) return [newInterval];
    
    // We can guarantee the length of the intervals list after
    // merging the new interval is at least 2.
    intervals.push(newInterval);
    intervals.sort((a, b) => a[0] - b[0]);
    console.log(intervals);
    let result = [];
    
    for (let i=0; i<intervals.length; i++) {
        let currentIndex = i;
        while (intervals[currentIndex] === null && currentIndex >= 0) { 
            currentIndex--;
        }
        if (overlap(intervals[currentIndex], intervals[i+1])) {
            let merged = [
                Math.min(intervals[currentIndex][0], intervals[i+1][0]),
                Math.max(intervals[currentIndex][1], intervals[i+1][1]),
            ];
            intervals[currentIndex] = merged;
            intervals[i+1] = null;
        } else {
            result.push(intervals[currentIndex]);
        }
    }
    return result;
};

const overlap = (i1 : number[], i2 : number[]) : boolean => {
    if (i2 === undefined) {
        return false;
    }
    if (i1[1] >= i2[0]) {
        return true;
    }
    return false;
}