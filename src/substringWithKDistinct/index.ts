export const lengthOfLongestSubstringKDistinct = function(s : string, k : number) : number {
    if (!s || k <= 0) return 0;
    let longestSoFar : number = 0;
    let left : number = 0;
    let right : number = 0;
    let charCounts : {[key: number] : number}  = {};
    let uniqueChars : number = 0;
    while (right < s.length) {
        if (charCounts[s[right]]) {
            charCounts[s[right]]++;
        } else {
            charCounts[s[right]] = 1;
            uniqueChars++;
        }

        if (uniqueChars > k) {
            charCounts[s[left]]--;
            if (charCounts[s[left]] <= 0) {
                uniqueChars--;
            }
            left++;
            right++;
        } else {
            let length = right === left ? 1 : right - left + 1;
            longestSoFar = Math.max(longestSoFar, length);
            right++;
        }
    }
    return longestSoFar;
};