export const longestPalindrome = function(s) {
    if (!s || s.length < 1) return "";
    let start = 0;
    let end = 0;
    
    for (let i=0; i<s.length; i++) {
        let len1 = expandFromMiddle(s, i, i); // handles odd length palindrome
        let len2 = expandFromMiddle(s, i, i+1); // handles even length palindrome
        let len = Math.max(len1, len2);
        if (len > end - start) {
            start = i - ((len - 1) / 2);
            end = i + (len / 2);
        }
        return s.substring(start, end + 1);
    }
};

const expandFromMiddle = (s, left, right) => {
    if (!s || left > right) return 0;
    while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
        left--;
        right++;
    }

    // return length of palindrome found
    return right - left - 1;
}