
// ================================================ Collision handling using Array ====================================================================

class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size
    }

    hash(key) {
        if (!key || key.length === 0) {
            return `Enter valid key`
        }
        let hashCodeIndex = 0;
        for (let i = 0; i < key.length; i++) {
            hashCodeIndex += key[i].charCodeAt();
        }
        return hashCodeIndex % this.size;
    }

    set(key, value) {
        if (!key || !value || !key.length) {
            return `Enter valid key and value`
        }
        const index = this.hash(key);
        if (!this.table[index]) {
            this.table[index] = [];
        }
        this.table[index].push({ key, value });
        return true;
    }

    get(key) {
        if (!key || key.length === 0) {
            return "enter valid key"
        }
        const index = this.hash(key);
        if(!this.table[index]){
            return undefined;
        }
        if(this.table[index].length === 1){
            return this.table[index]
        }
    }
}


    const table = new HashTable(5);
table.set("name" , "sameen");
// table.set("name" , "jasir");
console.log(table.get("name"));
console.log(table);