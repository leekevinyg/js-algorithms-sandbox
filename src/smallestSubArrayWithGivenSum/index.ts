export const smallest = function(s : number, arr : number[]) {
    if (arr.length === 0) return 0;
    let minLength = Number.POSITIVE_INFINITY;
    for (let i=0; i<arr.length; i++) {
      let sum = arr[i];
      let sub = [arr[i]];
      if (sum >= s) {
        if (minLength > 1) {
          minLength = 1;
        }
      }
      for (let j=i+1; j<arr.length; j++) {
        sum+=arr[j];
        sub.push(arr[j]);
        if (sum >= s) {
          if (sub.length < minLength) {
            minLength = sub.length;
          }
        }
      }
    }
    return minLength;
  };

export const smallest_sliding_window = function(s : number, arr : number[]) {
    if (arr.length === 0) return 0;
    let minLength = Number.POSITIVE_INFINITY;
    let left = 0;
    let right = 0;
    let sum = 0;
    while (right < arr.length && left < arr.length) {
        if (left === right) {
            sum = arr[right];
        } else {
            sum+=arr[right]
        }
        if (sum < s) {
            right++;
        } else if (sum >= s) {
            const length = right - left + 1;
            minLength = Math.min(length, minLength);
            sum-=arr[left];
            left++;
        }
    }
    return minLength;
  };