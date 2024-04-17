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
        this.table = new Array(size);
    }

    hash(key) {
        if (!key || key.length === 0) {
            throw new Error("key is not get")
        }
        let hashCodeIndex = 0;
        for (let i = 0; i < key.length; i++) {
            hashCodeIndex += key[i].charCodeAt();
        }
        return hashCodeIndex % this.size;
    }

    set(key, value) {
        if (!key || !value || key.length === 0) {
            throw new Error("Enter valid key and value");
        }
        const index = this.hash(key);
        const newNode = new Node(key, value);
        if (!this.table[index]) {
            this.table[index] = newNode;
        } else {
            let current = this.table[index];
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    get(key) {
        if (!key || key.length === 0) {
            throw new Error("Enter valid key")
        }
        const index = this.hash(key);
        if (!this.table[index]) {
            return undefined
        } else {
            let current = this.table[index];
            while (current) {
                if (current.key === key) {
                    return current.value
                }
                current = current.next;
            }
            return undefined;
        }
    }

    remove(key) {
        if (!key || key.length === 0) {
            return undefined
        }
        const index = this.hash(key);
        let current = this.table[index];
        if(!current){
            return undefined
        }
        if(current.key === key){
            this.table[index] = current.next;
            return true;
        }
        let previous = current;
        current = current.next;
        while(current){
            if(current.key === key){
                previous.next = current.next;
                return true;
            }
            previous = current;
            current = current.next;
        }
        return undefined;
    }

    print() {
        let result = "";
        for (let i = 0; i < this.size; i++) {
            result += `${i}`
            let current = this.table[i];
            while (current) {
                result += `${current.key} : ${current.value} -> `;
                current = current.next;
            }
            result += `
`
        }
        console.log(result);
    }
}

const table = new HashTable(150);
table.set("name", "sameen");
table.set("age", 20);
table.set("gender", "male");
table.set("place", "vaduthala");
table.set("name", "ronaldo");
table.set("naem", "suiiiiiiiiiiiiiiii");
table.set("age", 39);
table.set("gender", "male");
table.set("place", "Portuagal");
// table.print()
console.log(table);
console.log(table.get("naem"));
console.log(table.remove("naem"));
console.log(table);