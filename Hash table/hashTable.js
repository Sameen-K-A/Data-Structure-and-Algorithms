class HashTable {
    constructor(size) {
        this.size = size;
        this.table = new Array(this.size)
    }

    Hash(key) {
        if (!key || key.length === 0) {
            return console.log("Please enter key");
        }
        let hashCode = 0;
        for (let i = 0; i < key.length; i++) {
            hashCode += key[i].charCodeAt()
        }
        const index = hashCode % this.size;
        return index;
    }

    set(key, value) {
        const Index = this.Hash(key);
        this.table[Index] = { key, value };
    }
    get(key) {
        const Index = this.Hash(key);
        if (this.table[Index] !== undefined) {
            return this.table[Index]
        } else {
            return undefined;
        }
    }
    print() {
        for (let i = 0; i < this.size; i++) {
            console.log(this.table[i]);
        }
        return
    }
}

const table = new HashTable(500);
table.set("name" , "sameen")
table.set("age" , 20)
table.set("Gender" , "Male")
table.set("place" , "Vaduthala")
table.print()