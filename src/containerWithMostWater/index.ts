export const containerWithMostWater = (height : number[]) : number => {
    let maxAreaSoFar = 0;

    // Iterate through heights, and calculate max area with 
    // bars before and after it.
    for (let i=0; i<height.length; i++) {
        // calculate max area with bars after it
        for (let j=i+1; j<height.length; j++) {
            let length = Math.min(height[i], height[j]);
            let width = j - i;
            let area = length * width;
            if (area > maxAreaSoFar) {
                maxAreaSoFar = area;
            }
        }
        // calculate max area with bars before it
        for (let k=i-1; k>=0; k--) {
            let length = Math.min(height[i], height[k]);
            let width = i - k;
            let area = length * width;
            if (area > maxAreaSoFar) {
                maxAreaSoFar = area;
            }
        }
    }
    return maxAreaSoFar;
}