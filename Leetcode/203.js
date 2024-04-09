class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    addToEnd(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    // Q: Remove element from linked list;

    removeValue(value) {
        if (this.head === null) {
            return console.log(null);
        }
        while (this.head != null && this.head.value === value) {
            this.head = this.head.next;
        }
        let current = this.head;
        while (current != null && current.next != null) {
            if (current.next.value === value) {
                current.next = current.next.next;
            } else {
                current = current.next
            }
        }
    }

    print() {
        if (this.head == null) {
            return console.log(null);
        } else {
            let current = this.head;
            let result = '';
            while (current) {
                result += `${current.value} `
                current = current.next;
            }
            return console.log(result);
        }
    }
}

const data = new LinkedList();
data.addToEnd(4);
data.addToEnd(4);
data.addToEnd(1);
data.addToEnd(2);
data.addToEnd(3);
data.addToEnd(4);
data.addToEnd(4);
data.addToEnd(5);
data.addToEnd(6);
data.addToEnd(7);
data.addToEnd(4);
data.addToEnd(8);
data.addToEnd(9);
data.addToEnd(0);
data.addToEnd(4);
data.addToEnd(4);
data.removeValue(4)
data.print();