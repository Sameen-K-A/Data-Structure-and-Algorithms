class Node {
    constructor() {
        this.children = {};
        this.end = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(word) {
        let current = this.root;
        for (let char of word) {
            if(!current.children[char]){
                current.children[char] = new Node();
            }
            current = current.children[char];
        }
        current.end = true;
    }
}