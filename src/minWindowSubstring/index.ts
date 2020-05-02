/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s : string, t : string) : string {
    
    // handle null edge cases
    if (!s || !t) return "";
    if (t.length > s.length) return "";
    
    // construct char count map for t
    let tCount : { [key: string] : number} = {};
    for (let i=0; i<t.length; i++) {
        if (tCount[t[i]]) {
            tCount[t[i]]++;
        } else {
            tCount[t[i]] = 1;
        }
    }
    
    let minWindow : string = "";
    let minWindowLength : number = Number.POSITIVE_INFINITY;
    let right : number = 0;
    let left : number = 0;
    let currCount : {[key: string] : number} = {};
    currCount[s[0]] = 1;    
    
    while (right >= left && right < s.length) {
       if (characterCountMet(currCount, tCount)) {
           let substring = s.slice(left, right + 1);
           if (substring.length < minWindowLength) {
               minWindow = substring;
               minWindowLength = substring.length;
           }
           currCount[s[left]]--;
           left++;
       } else {
           right++;
           if (currCount[s[right]]) {
               currCount[s[right]]++;
           } else {
               currCount[s[right]] = 1;
           }  
       }
    }

    return minWindow;
}


// T is max length S, so this is O(S)
const characterCountMet = (currCount : {[key: string] : number}, tCount  : {[key:string] : number}) : boolean => {
    for (property in tCount) {
        if (currCount[property] >= tCount[property]) {
            // we're good, continue checking.
        } else {
            return false;
        }
    }
    return true;
};
