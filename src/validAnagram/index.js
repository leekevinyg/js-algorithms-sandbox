/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s === null && t === null) return true;
    if (s === null && t !== null) return false;
    if (t === null && s !== null) return false;
    if (t.length !== s.length) return false;
        
    const sMap = {};
    const tMap = {};
    
    for (let i=0; i<s.length; i++) {
        if (sMap[s[i]]) {
            sMap[s[i]]++;
        } else {
            sMap[s[i]] =  1;
        }
    }
    
    for (let i=0; i<t.length; i++) {
        if (tMap[t[i]]) {
            tMap[t[i]]++;
        } else {
            tMap[t[i]] =  1;
        }
    }
    
    let sKeys = Object.keys(sMap);
    for (let i=0; i<sKeys.length; i++) {
        let key = sKeys[i];
        if (sMap[key] === tMap[key]) {
            continue;
        } else {
            return false;
        }
    }
    
    return true;  
};