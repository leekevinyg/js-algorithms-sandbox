interface ITrie {
    insert(word : string) : void,
    search(word : string) : boolean,
    startsWith(prefix : string) : boolean,
}

interface ITrieNode {
    keys : {[key : string] : ITrieNode},
    end : boolean,
}

class TrieNode implements ITrieNode {
    keys: { [key: string]: ITrieNode; };    
    end: boolean;
    constructor() {
        this.keys = {};
        this.end = false;
    }
}

class Trie implements ITrie {
    root : TrieNode;
    constructor() {
        this.root = new TrieNode();
    }

    insert(word: string, node = this.root): void {
        if (word.length === 0) {
            node.end = true;
            return;
        } else if (node.keys[word[0]]) {
            return this.insert(word.substr(1), node.keys[word[0]]);
        } else {
            node.keys[word[0]] = new TrieNode();
            return this.insert(word.substr(1), node.keys[word[0]]);
        }
    }

    search(word: string): boolean {
        let node = this.root;
        while (word.length > 1) {
            if (node.keys[word[0]]) {
                node = node.keys[word[0]];
                word = word.substr(1);
            } else {
                return false;
            }
        }

        if (node.keys[word[0]] && node.keys[word[0]].end === true) {
            return true;
        }
        return false;
    }

    startsWith(prefix: string): boolean {
        let node = this.root;
        while (prefix.length > 1) {
            if (node.keys[prefix[0]]) {
                node = node.keys[prefix[0]];
                prefix = prefix.substr(1);
            } else {
                return false;
            }
        }

        return !!node.keys[prefix[0]];
    }
}