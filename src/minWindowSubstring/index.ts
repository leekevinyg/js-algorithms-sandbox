export const minWindow = function (s, t) {
    // handle null edge cases
    if (!s || !t)
        return "";
    if (t.length > s.length)
        return "";
    // construct char count map for t
    let tCount = {};
    for (let i = 0; i < t.length; i++) {
        if (tCount[t[i]]) {
            tCount[t[i]]++;
        }
        else {
            tCount[t[i]] = 1;
        }
    }
    let minWindow = "";
    let right = 0;
    let left = 0;
    let numUniqueChars = Object.keys(tCount).length;

    if (tCount[s[left]] !== undefined) {
        tCount[s[left]]--;
    }

    if (tCount[s[left]] === 0) {
        numUniqueChars--;
    }
    
    while (right < s.length) {
        if (numUniqueChars === 0) {
            let substring = s.slice(left, right + 1);
            if (minWindow === "" || substring.length < minWindow.length) {
                minWindow = substring;
            }
            // If the leftmost character was in our tcount, update the count as we increment the pointer
            if (tCount[s[left]] !== undefined) {
                tCount[s[left]]++;
            }
            if (tCount[s[left]] > 0) {
                numUniqueChars++;
            }
            left++;
        }
        else {
            right++;
            // we have reached a character in our t string, update the char count
            if (tCount[s[right]] !== undefined) {
                tCount[s[right]]--;
            }
            if (tCount[s[right]] === 0) {
                numUniqueChars--;
            }
        }
    }
    return minWindow;
};