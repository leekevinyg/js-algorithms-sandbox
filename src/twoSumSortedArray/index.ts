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
        if (indexOfComplement) {
            return [i, indexOfComplement];
        }
    }
    return [];
}

const search = (numbers : number[], target : number) : number => {
    if (!numbers || numbers.length === 0) {
        return null;
    }

    if (numbers.length === 1) {
        return numbers[0] === target ? 0 : null;
    }

    let low = 0;
    let high = numbers.length - 1;
    let mid = Math.ceil(high / 2);

    if (numbers[mid] === target) {
        return mid;
    } else if (numbers[mid] > target) {
        // target is in left half of the array
        return search(numbers.splice(low, mid), target);
    } else {
        // search in right half of the array
        return search(numbers.splice(mid, high), target);
    }
}