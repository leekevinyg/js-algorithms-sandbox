export const twoSumSortedArray = (numbers : number[], target : number ) : number[] => {
    let left = 0;
    let right = numbers.length - 1;
    
    while (right > left) {
        let currSum = numbers[left] + numbers[right];
        if (currSum === target) return [left + 1, right + 1];
        if (currSum > target) {
            right--;
        } else {
            left++
        }
    }
    return [];
}

export const twoSumBinarySearch = (numbers : number[], target : number) : number[] => {
    for (let i=0; i<numbers.length; i++) {
        let num = numbers[i];
        let complement = target - num;
        let indexOfComplement = search(numbers, complement);
        if (indexOfComplement >= 0) {
            return [i + 1, indexOfComplement + 1];
        }
    }
    return [];
}

const search = (numbers : number[], target : number) : number => {
    if (!numbers || numbers.length === 0) {
        return -1;
    }

    if (numbers.length === 1) {
        return numbers[0] === target ? 0 : -1;
    }

    let low = 0;
    let high = numbers.length - 1;
    while (low <= high) {
        let mid = Math.ceil(low + ((high - low) / 2));
        if (numbers[mid] === target) {
            return mid;
        } else if (numbers[mid] > target) {
            high = mid - 1;
        } else if (numbers[mid] < target) {
            low = mid + 1;
        }
    }
    return -1;
}