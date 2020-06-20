var numDecodings = function(s : string) {
    let totalLength : number = s.length;
    let memo : Map<string, number> = new Map();

    const isValid = (string) => {
        return parseInt(string) > 0 && parseInt(string) <= 26;
    };
    
    const memoize = (key, value) => {
        if (memo.get(key)) {
            memo.set(key, memo.get(key) + value)
        } else {
            memo.set(key, 1)
        }
    }

    const generateDecodings = (strNode) => {
        const { s, parent } = strNode;
        
        if (memo.has(s)) {
            if (memo.get(s)) {
                let root = strNode.parent;
                memoize(root.s, memo.get(s));
                while (root.parent !== null) {
                    root = root.parent;
                    memoize(root.s, memo.get(s));
                }
            }
            return;
        }
        
        if (s.length === 0) {
            let root = strNode.parent;
            memoize(root.s, 1)
            while (root.parent !== null) {
                root = root.parent;
                memoize(root.s, 1);
            }

            return;
        }
        
        let index = 1;
        while (index <= s.length && index <= 2) {
            const part = s.slice(0, index);
            if (isValid(part)) {
                generateDecodings({
                    s: s.substr(index),
                    parent: strNode
                });
                index++;
            } else {
                return 0;
            }
        }
    }
        
    generateDecodings({
        s: s,
        parent: null,
    });
    return memo.get(s) ? memo.get(s) : 0
};