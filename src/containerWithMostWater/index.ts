export const containerWithMostWater = (height : number[]) : number => {
    let startIndex = 0;
    let endIndex = height.length - 1;
    let maxArea = 0;
    
    while (endIndex > startIndex) {
        let minLength = Math.min(height[startIndex], height[endIndex]);
        let width = endIndex - startIndex;
        let currentArea = minLength * width;
        if (currentArea > maxArea) {
            maxArea = currentArea;
        }
        if (height[startIndex] < height[endIndex]) {
            startIndex++;
        } else {
            endIndex--;
        }
    }
    return maxArea;
}