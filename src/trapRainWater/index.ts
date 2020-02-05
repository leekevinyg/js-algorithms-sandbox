export const trap = (heights : number[]) : number => {
    if (!heights || heights.length === 0) {
        return 0;
    }

    let buckets = [];
    let bucketLeftEdge = null;
    let bucketRightEdge = null;
    let stepsToRightEdge = 0;
    for (let i=0; i<heights.length; i++) {
        // initialize bucketLeftEdge if it doesn't exist
        if (bucketLeftEdge === null && heights[i] > bucketLeftEdge) {
            bucketLeftEdge = heights[i];
            continue;
        }
        // test if we have reached the bucketRightEdge
        if (bucketRightEdge === null && heights[i] > 0) {
            bucketRightEdge = heights[i];
            const trappableWater = Math.min(bucketLeftEdge, bucketRightEdge) * stepsToRightEdge;
            buckets.push(trappableWater);
            // reset parameters
            bucketLeftEdge = bucketRightEdge;
            bucketRightEdge = null;
            stepsToRightEdge = 0;
        } else if (bucketLeftEdge) {
            stepsToRightEdge++;
        }
    }

    let totalTrappedWater = 0;
    for (let i=0; i<buckets.length; i++) {
        totalTrappedWater+=buckets[i];
    }
    return totalTrappedWater;
}