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

    //============================================ Find the size of linked list ====================================

    getSize() {
        return this.size;
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
        return newNode
    };

    //============================================ Add a new node into end of linkedlist ====================================

    addToLast(newValue) {
        const newNode = new Node(newValue);
        if (this.isEmpty()) {
            this.head = newNode;
        } else {
            let currentValue = this.head;
            while (currentValue.next) {
                currentValue = currentValue.next;
            };
            currentValue.next = newNode;
        }
        this.size++
    }

    //============================================ Add a new node into specific index of linkedlist ====================================

    addToIndex(newValue , index){
        if(this.isEmpty() || this.size < index){
            return console.log(null);
        }
        
        if(index === 0){
            this.addToFirst(newValue)
        }else{
            let previous = this.head
            let position = 0;
            while(position < index-1){
                position++;
                previous = previous.next;
            }
            const newNode = new Node(newValue);
            newNode.next = previous.next;
            previous.next = newNode;
            this.size++
        }
    }

    //============================================ remove a node from a linkedlist ====================================

    removeNode(position){
        if(position <0 || position > this.size){   // scenario 1
            return console.log(null);
        }
        if(position === 0){                         // scenario 2
            this.head = this.head.next
        }else{                                      // scenario 3
            let prevNode = this.head;
            for(let i=0 ; i<position-1 ; i++){
                prevNode = prevNode.next
            }
            let removeNode = prevNode.next
            prevNode.next = removeNode.next;
            this.size--;
        }
    }

    //============================================ remove a specific value from a linkedlist ====================================

    deleteValue(value){
        let current =  this.head;
        if(current.value === value){
            this.head = current.next;
            this.size--
            return
        } else{
            let previous = null;
            while(current.next){
                previous = current
                current = current.next;
                if(current.value === value){
                    previous.next = current.next;
                    this.size--
                    return
                }
            }
        }
        return console.log("value not found");
    }

    //============================================ Print all the element in linkedlist ====================================

    print() {
        if (this.isEmpty()) {
            console.log("Linked list is empty");
        } else {
            let currentValue = this.head;
            let linkedValue = '';
            while (currentValue) {
                linkedValue += `${currentValue.value} -> `;
                currentValue = currentValue.next
            };
            console.log(linkedValue);
        }
    }

    //============================================ Find sum of all node values in a linkedlist ====================================

    sum() {
        if (this.isEmpty()) {
            console.log(0);
        } else {
            let current = this.head;
            let result = 0;
            while (current) {
                result += current.value
                current = current.next;
            }
            console.log(result);
        }
    }

    //============================================ Reverse node in a linkedlist ====================================

    reverse() {
        if(this.isEmpty()){
            return console.log("Linked list is empty that why reverse is not working");
        } else{
            let current = this.head;
            let previous = null;
            while (current) {
                let nextValue = current.next;
                current.next = previous;
                previous = current;
                current = nextValue
            }
            this.head = previous
        }
    }

    //============================================ Reverse node in a linkedlist ====================================

    Stringreverse(string) {
        if(string.length === 0){
            return console.log("String is empty that why reverse is not working");
        } else{
            for (const elements of string) {
                this.addToLast(elements);
            }
            this.reverse()
        }
    }

    //============================================ Find the larest values in a linkedlist ====================================

    largest(){
        let largest = 0;
        if(this.isEmpty()){
            return console.log("Can't find largest because list is empty");
        }
        if(this.size === 1){
            return console.log(`largest value is ${this.head.value}`);
        } else{
            let current = this.head;
            while(current){
                if(largest < current.value){
                    largest = current.value;
                }
                current = current.next;
            }
            return console.log(`largest value is ${largest}`);
        }
    }

    //============================================ Find the second larest values in a linkedlist ====================================

    secondLarge(){
        let largest = 0;
        let secondLargest = 0;
        if(this.isEmpty() || this.size < 2){
            return false;
        } else{
            let current = this.head;
            while(current){
                if(largest < current.value){
                    secondLargest = largest;
                    largest = current.value
                }
                current = current.next;
            }
            return console.log(`Second Largest value is ${secondLargest}`);
        }
    }

    //============================================ Find the sum of a 3 middle node values in a linkedlist ====================================

    sumOf_MidThree(){
        if(this.size < 3){
            return console.log(`3 node minimum need`);
        }
        let current = this.head;
        let result = 0;
        if(this.size === 3){
            while(current){
                result += current.value;
                current = current.next;
            }
            return console.log(result);
        } else{
            let midIndex = Math.floor(this.size / 2);
            let previous = null;
            let currentIndex = 0;
            while(current){
                if(midIndex === currentIndex){
                    result += previous.value
                    result += current.value
                    result += current.next.value;
                    return console.log(`Middle 3 values is ${previous.value},${current.value},${current.next.value} and output is ${result}`);
                }
                currentIndex++
                previous = current;
                current = current.next
            }
        }
    }

    //============================================ array to linkedlist ====================================

    arrayToLinkedList(array){
        if(array.length === 0){
            return console.log(null);
        } else{
            for(let i=0 ; i<array.length ; i++){
                this.addToLast(array[i]);
            }
        }
    }
}

const data = new linkedList();
data.addToFirst(10);
data.addToFirst(30);
data.addToFirst(40);
data.addToLast(20);
data.addToLast(90);
data.addToLast(80);
data.addToLast(70);
data.addToIndex(30 , 1);
data.removeNode(1)
data.deleteValue(40)
data.sum();
data.reverse();
data.Stringreverse("ABCDEFGHIJ");
data.largest();
data.secondLarge();
data.sumOf_MidThree();
data.arrayToLinkedList([1,2,3,4,5,6,7])
data.print()