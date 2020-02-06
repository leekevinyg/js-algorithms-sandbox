export const trap = (heights : number[]) : number => {
    let ans = 0;
    let maxLeft = 0;
    let maxRight = 0;
    for (let i=0; i<heights.length; i++) {
        // find max left of i
        for (let j=i-1; j>=0; j--) {
            if (heights[j] > maxLeft) {
                maxLeft = heights[j];
            }
        }
        // find max right of i
        for (let k=i+1; k<heights.length; k++) {
            if (heights[k] > maxRight) {
                maxRight = heights[k];
            }
        }
        if (Math.min(maxLeft, maxRight) - heights[i] > 0) {
            ans+= Math.min(maxLeft, maxRight) - heights[i];
        }
        maxLeft = 0;
        maxRight = 0;
    }
    return ans;
}