class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.size = 0;
        this.head = null;
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size
    }

    addToFirst(newValue){
        const newNode = new Node(newValue);
        if(this.isEmpty()){
            this.head = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode
        }
        this.size++
    }

    print(){
        if(this.isEmpty()){
            console.log("List is Empty");
        } else{
            let current = this.head;
            let values = '';
            while(current){
                values += `${current.value} ->`;
                current = current.next
            }
            console.log(`Values of the linked list is ${values}`);
        } 
    }

    reverse(){
        let current = this.head;
        let previous = null;
        while(current){
            let nextValue = current.next;
            current.next = previous;
            previous = current;
            current = nextValue
        }
        this.head = previous
    }
}

const data = new LinkedList();
data.print()
data.addToFirst(12)
data.addToFirst(32)
data.addToFirst(22)
data.print()
data.reverse()
data.print()