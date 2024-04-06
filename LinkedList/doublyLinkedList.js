class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
};

class linkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    };

    //============================================ Checking linkedlist is empty ====================================

    isEmpty() {
        return this.size === 0;
    };

    //============================================ Add new node to front of linkedlist ====================================

    addToFirst(newValue) {
        const newNode = new Node(newValue);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode
        } else {
            let current = this.head;
            current.previous = newNode;
            newNode.next = current;
            this.head = newNode
        }
        this.size++;
    }

    //============================================ print values in linkedlist ====================================

    print() {
        if (this.isEmpty()) {
            console.log("Double linked list is empty");
        } else {
            let current = this.head;
            let result = ""
            while (current) {
                result += `${current.value} <->`;
                current = current.next
            }
            console.log(result);
        }
    }

    //============================================ Reverse nodes in a inkedlist ====================================

    reverse() {
        if (this.isEmpty()) {
            console.log("List is empty");
        } else {
            let last = this.tail;
            let reversedResult = '';
            while (last) {
                reversedResult += `${last.value} <=>`;
                last = last.previous;
            };
            console.log(reversedResult);
        }
    }
};


const data = new linkedList();
data.addToFirst(10);
data.addToFirst(80);
data.addToFirst(20);
data.addToFirst(60);
data.print()
data.reverse()