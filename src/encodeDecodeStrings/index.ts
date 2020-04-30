const intToStr = integer => String.fromCharCode(integer & 0xFFFF) + String.fromCharCode(integer >> 16 & 0xFFFF);
const strToInt = str => str.charCodeAt(1) << 16 | str.charCodeAt(0)

/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
const encode = strs => strs.reduce((acc, str) => {
	acc += intToStr(str.length);
	acc += str;
	return acc;
}, '');

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
const decode = function(s) {
	const result = []
    for (let i = 0; i < s.length; i++) {
    	const length = strToInt(s.slice(i, i + 2))
    	result.push(s.slice(i + 2, i + 2 + length))
    	i = i + 1 + length;
    }

    return result;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */