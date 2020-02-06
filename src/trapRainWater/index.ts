export const trap = (height : number[]) : number => {
    let ans = 0;
    let maxRight : number[] = getMaxRightArray(height);
    let maxLeft : number[]= getMaxLeftArray(height);

    for (let i=0; i<height.length; i++) {
        ans+= Math.max(Math.min(maxLeft[i], maxRight[i]) - height[i], 0);
    }
    return ans;
}

const getMaxRightArray = (height: number[]) : number[] => {
    let maxRight = [];
    maxRight[height.length - 1] = height[height.length - 1];
    for (let i=height.length - 2; i>=0; i--) {
        maxRight[i] = Math.max(height[i], maxRight[i+1]);
    }
    return maxRight;
}


const getMaxLeftArray = (height: number[]) : number[] => {
    let maxLeft = [];
    maxLeft[0] = height[0];
    for (let i=1; i<height.length;i++) {
        maxLeft[i] = Math.max(height[i], maxLeft[i-1]);
    }
    return maxLeft;
}