export const minRotatedSortedArray = (nums : number[]) : number => {
    if (!nums || nums.length === 0) {
        return 0;
    }
    let minSoFar = nums[0];
    for (let i=1; i<nums.length; i++) {
        if (nums[i] < minSoFar) {
            minSoFar = nums[i];
        }
    }
    return minSoFar;
}