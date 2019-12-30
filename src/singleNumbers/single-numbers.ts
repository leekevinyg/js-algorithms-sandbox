/**
 * @param {number[]} nums
 * @return {number[]} of single numbers
 */
const singleNumber = (nums : number[]) : number[] => {
    let map = {};
    for (let i=0; i<nums.length; i++) {
        let number = nums[i];
        if (map[number] === undefined) {
            // first time we've seen it
            map[number] = true;
        } else if (map[number] === true) {
            // we've seen it already
            map[number] = false;
        }
    }

    let singleNumbers = [] ;
    let numbers = Object.keys(map);
    
    for (let j=0; j < numbers.length; j++) {
        if (map[numbers[j]] === true) {
            singleNumbers.push(numbers[j]);
        }
    }

    return singleNumbers;
};