
/*
    In this code, collisions may occur when multiple keys hash to the same index in the hash table.
    However, collision resolution is not implemented, so when a collision occurs,
    the new key-value pair overwrites the old key-value pair at that index in the hash table.
*/

class HashTable {
    constructor(size) {
        this.size = size;
        this.array = new Array(size)
    }

    hash(key) {
        if (!key || key.length === 0) {
            return null;
        }
        let hashCodeIndex = 0;
        for (let i = 0; i < key.length; i++) {
            hashCodeIndex += key[i].charCodeAt();
        }
        return hashCodeIndex % this.size;
    }

    set(key, value) {
        if (!key || !value || key.length === 0) {
            return false
        }
        const index = this.hash(key);
        this.array[index] = { key, value };
    }

    get(key) {
        if (!key || key.length === 0) {
            return undefined;
        }
        const index = this.hash(key);
        if (!this.array[index] || this.array[index].key !== key) {
            return undefined;
        } else {
            return this.array[index]
        }
    }

    remove(key) {
        if (!key || key.length === 0) {
            return undefined
        }
        const index = this.hash(key);
        if(!this.array[index] || this.array[index].key !== key){
            return undefined;
        } else{
            this.array[index] = undefined;
            return `key and value removed from ${index}`
        }
    }
}

const table = new HashTable(50);
table.set("name", "sameen");
table.set("age", 20);
console.log(table.get("hello"));
console.log(table.remove("name"));
console.log(table);