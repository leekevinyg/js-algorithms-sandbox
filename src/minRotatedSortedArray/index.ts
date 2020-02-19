export const minRotatedSortedArray = (nums : number[]) : number => {
    if (!nums || nums.length === 0) {
        return 0;
    }
    
    if (nums.length === 1) {
        return nums[0];
    }

    let left = 0;
    let right = nums.length - 1;

    if (nums[right] > nums[0]) {
        // no rotation
        return nums[0];
    }

    let mid = Math.ceil(nums.length / 2);

    if (nums[mid - 1] > nums[mid]) {
        return nums[mid];
    } else if (nums[mid] > nums[mid + 1]) {
        return nums[mid + 1];
    }

    if (nums[mid] > nums[0]) {
        return minRotatedSortedArray(nums.splice(mid, right));
    } else {
        return minRotatedSortedArray(nums.splice(left, mid));
    }
}