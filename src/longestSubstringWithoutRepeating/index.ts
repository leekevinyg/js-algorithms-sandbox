export const lengthOfLongestSubstring = function(s : string) : number {
    if (s === null || s.length === 0) {
        return 0;
    }

    let i = 0;
    let j = 0;
    let seenMap = {};
    let maxStreak = 1;
    seenMap[s[i]] = 1;  

    while (i <= j && i < s.length - 1 && j < s.length - 1) {
        j++
        let nextChar = s[j];
        if (seenMap[nextChar]) {
            seenMap[nextChar]++
        } else {
            seenMap[nextChar] = 1;
        }
        
        while (duplicatesExist(seenMap) && i <= j) {
            seenMap[s[i]]--;
            i++;
        }

        maxStreak = Math.max(maxStreak, j - i + 1);
    }
    return maxStreak;        
}

const duplicatesExist = (hashMap) => {
    const keys = Object.keys(hashMap);
    for (let i=0; i<keys.length; i++) {
        if (hashMap[keys[i]] > 1) {
            return true;
        }
    }
    return false;
}