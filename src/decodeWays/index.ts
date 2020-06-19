/**
 * @param {string} s
 * @return {number}
 */
export const numDecodings = function(s) {
    let numDecodings = 0;
    let totalLength = s.length;
    const isValid = (string) => {
        return parseInt(string) > 0 && parseInt(string) <= 26;
    };
    const generateDecodings = (s, index) => {
        if (index === totalLength) {
            numDecodings++;
            return;
        }
        for (let i=1; i<=s.length; i++) {
            let decodedWord = s.slice(0, i);
            let newWord = s.substr(i);
            if (isValid(decodedWord)) {
                generateDecodings(newWord, index + i);
            } else {
                return;
            }
        }
    }

    generateDecodings(s, 0);
    return numDecodings;
};