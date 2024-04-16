class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class HashTable {
    constructor(size) {
        this.size = size;
        this.table = new Array(this.size);
    }

    hash(key) {
        if (!key || key.length === 0) {
            return console.log("Enter valid key");
        }
        let hashCodeIndex = 0;
        for (let i = 0; i < key.length; i++) {
            hashCodeIndex += key[i].charCodeAt();
        }
        return hashCodeIndex % this.size;
    }

    set(key, value) {
        if (!key || !value || key.length === 0 || value.length === 0) {
            return console.log("Enter valid key and value");
        }
        const newNode = new Node(key, value);
        const index = this.hash(key);
        if (this.table[index]) {
            let currentNode = this.table[index];
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        } else {
            this.table[index] = newNode;
        }
    }

    print() {
        for (let i = 0; i < this.size; i++) {
            let result = "";
            let currentNode = this.table[i];
            while(currentNode){
                result += `${currentNode.key}: ${currentNode.value} -> `;
                currentNode = currentNode.next;
            }
            if(result !== ""){
                console.log(result);
            } else{
                console.log(undefined);
            }
        }
    }
}


const table = new HashTable(20);
table.set("name" , "Ronaldo");
table.set("name" , "Benzima");
table.set("name" , "Bale");
table.print()