class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
};

class linkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    };

    //============================================ checking linkedlist element is zero ====================================

    isEmpty() {
        return this.size === 0;
    };

    //============================================ Add a new node into front of linkedlist ====================================

    addToFirst(newValue) {
        const newNode = new Node(newValue);
        if (this.isEmpty()) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++
    };

    //============================================ Binary search in a sorted array in linkedlist ====================================

    binarySort_Search(target) {
        if (this.isEmpty()) {
            return console.log("Linked list is empty");
        } else {
            let array = [];
            let current = this.head;
            while (current) {
                array.push(current.value);
                current = current.next;
            }
            let firstPostition = 0;
            let lastPosition = array.length - 1;
            while (firstPostition <= lastPosition) {
                let midPosition = Math.floor((firstPostition + lastPosition) / 2);
                if (target === array[midPosition]) {
                    return console.log(`${target} find at position ${midPosition}`)
                }
                if (target < array[midPosition]) {
                    lastPosition = midPosition - 1;
                } else {
                    firstPostition = midPosition + 1
                }
            }
            return -1
        }
    }
}

const data = new linkedList();
data.addToFirst(60)
data.addToFirst(50)
data.addToFirst(40)
data.addToFirst(30)
data.addToFirst(20)
data.addToFirst(10)
data.binarySort_Search(30)