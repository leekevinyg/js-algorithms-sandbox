/*

Given array A, return the largest number X which occurs X times.
If no such value, return 0.

*/

const largestNumber = (arr : number[]) : number => {
    arr.sort();
    let occurenceMap = {};
    for (let i = arr.length - 1; i>=0; i--) {
        let val = arr[i];
        if (!occurenceMap[val]) {
            occurenceMap[val] = 1;
        } else {
            occurenceMap[val]++;
        }
    }

    for (let i = arr.length - 1; i>=0; i--) {
        let val = arr[i];
        if (val === occurenceMap[val]) {
            return arr[i];
        }
    }
    return 0;
}
