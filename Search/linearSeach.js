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

    //============================================ Linear search in a linkedlist ====================================

    search(value){
        if(this.isEmpty()){
            return console.log("Linked list is empty");
        } else{
            let index = 0;
            let current = this.head;
            while(current){
                if(current.value === value){
                    return console.log(`${value} find at index ${index}`);
                }
                current = current.next;
                index++;
            }
            return console.log("Value is not find");
        }
    }
}

const data = new linkedList();
data.addToFirst(30)
data.addToFirst(40)
data.addToFirst(20)
data.addToFirst(60)
data.addToFirst(50)
data.addToFirst(70)
data.search(70)