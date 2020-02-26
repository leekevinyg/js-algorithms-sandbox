export const searchRotatedArray = (nums, target) => {
    if (!nums || nums.length === 0) {
        return -1;
    }
    
    if (nums.length === 1) {
        return nums[0] === target ? 0 : -1;
    }
    
    let end = nums.length - 1;
    if (nums[0] < nums[end]) {
        // array is not rotated, run regular binary search
        return binarySearch(nums, target);
    }
    
    // find pivot point, see which array our target is in, and run binary search in it.
    let mid = Math.round(nums.length / 2);
    let start = 0;
    let pivot = -1;

    while (start <= end) {
        mid = Math.round(start + (end - start)/2);
        if (nums[mid] < nums[mid - 1]) {
            // we found the pivot
            pivot = mid;
            break;
        } else if (nums[mid] > nums[mid + 1]) {
            // pivot is right next to current mid
            pivot = mid + 1;
            break;
        } else if (nums[mid] > nums[start]) {
            // pivot is to the right of mid
            start = mid + 1;
        } else if (nums[mid] < nums[start]) {
            // pivot is to the left of mid
            end = mid - 1;
        }
    }

    if (target === nums[pivot]) {
        return pivot;
    } else if (nums[pivot] < target) {
        // target is the the array to the left of mid
        return binarySearch(nums.splice(0, pivot), target);
    } else if (nums[pivot] > target) {
        // target is in the array to the right of mid
        return binarySearch(nums.splice(pivot + 1, nums.length), target);
    }

    return -1;
};

export const binarySearch = (nums, target) => {
    let start = 0;
    let end = nums.length - 1;
    let mid = Math.ceil(end / 2);
    
    while (start <= end) {
        mid = Math.round(start + (end - start)/2);
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[mid] < target) {
            start = mid + 1;    
        } else if (nums[mid] > target) {
            end = mid - 1;
        }
    }
    return -1;
}