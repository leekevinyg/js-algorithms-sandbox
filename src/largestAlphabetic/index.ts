/*

Given a string S, find the largest alphabetic character, whose both uppercase and lowercase appear in S. 
The uppercase character should be returned. 
For example, for S = "admeDCAB", return "D". 
If there is no such character, return "NO".

*/

let largestAlphbetic = (s) => {
    if (s.length < 2) return "NO";
    const lowercase = [];
    const uppercase = [];
    for (let i=0; i<s.length; i++) {
        let val = s.charCodeAt(i) - 'a'.charCodeAt(0);
        if (val >= 0) {
            // it’s a lowercase character
            lowercase[val] = s.charCodeAt(i);
        } else {
            // it’s an upper case character
            let normalizedVal = s.charCodeAt(i) - 'A'.charCodeAt(0);
            uppercase[normalizedVal] = s.charCodeAt(i);
        }
    }
    
    for (let j=uppercase.length - 1; j>=0; j--) {
        if (uppercase[j] !== 0 && lowercase[j] !== 0) {
            return String.fromCharCode(uppercase[j]);
        }
    }
    return "NO";
}