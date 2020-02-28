export const longestSubString = function(s) {
    let maxStreak = 0;
    for (let i=0; i<s.length; i++) {
        let streak = nonRepeatingStreak(s.substring(i, s.length));
        if (streak > maxStreak) {
            maxStreak = streak;
        } 
    }
    return maxStreak;
};

const nonRepeatingStreak = (s) => {
    let streak = 0;
    let seenMap = {};
    for (let i=0; i<s.length; i++) {
        let char = s[i];
        if (seenMap[char]) {
            return streak;
        } else {
            streak++;
            seenMap[char] = true;
        }
    }
    return streak;
}