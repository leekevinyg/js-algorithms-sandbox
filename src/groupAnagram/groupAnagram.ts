export const groupAnagrams = function(strs : string[]) {
    // hashmap of anagrams;
    let map : {[key: string] : string[]} = {};
    for (let i=0; i<strs.length; i++) {
        let hashedStr : string = generateCharacterHash(strs[i]);
        if (map[hashedStr]) {
            map[hashedStr] = [...map[hashedStr], strs[i]];
        } else {
            map[hashedStr] = [strs[i]];
        }
    }
    
    let groups : string[][] = [];
    let anagramKeys : string[] = Object.keys(map);
    for (let i=0; i<anagramKeys.length; i++) {
        groups.push(map[anagramKeys[i]]);
    }
    return groups;
};

const generateCharacterHash = (str : string) => {
    const map : {[key : string] : number} = {
        'a': 0,
        'b': 0,
        'c': 0,
        'd': 0,
        'e': 0,
        'f': 0,
        'g': 0,
        'h': 0,
        'i': 0,
        'j': 0,
        'k': 0,
        'l': 0,
        'm': 0,
        'n': 0,
        'o': 0,
        'p': 0,
        'q': 0,
        'r': 0,
        's': 0,
        't': 0,
        'u': 0,
        'v': 0,
        'w': 0,
        'x': 0,
        'y': 0,
        'z': 0,
    };
    for (let i=0; i<str.length; i++) {
        map[str[i]]++;
    }
    let hashKeys : string[] = Object.keys(map);
    let hash : string = '';
    for (let i=0; i<hashKeys.length; i++) {
        hash+=`${hashKeys[i]}${map[hashKeys[i]]}`;
    }
    return hash;
}
