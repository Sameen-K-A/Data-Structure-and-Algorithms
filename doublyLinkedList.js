class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.previous = null;
    }
};

class linkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    };
    isEmpty(){
        return this.size === 0;
    };
    addValue(newValue){
        const newNode = new Node(newValue);
        if(this.isEmpty()){
            this.head = newNode;
            this.tail = newNode
        } else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            newNode.previous = this.head;
            current.next = newNode
        }
        this.size++;
    }
    print(){
        if(this.isEmpty()){
            console.log("Double linked list is empty");
        } else{
            let current = this.head;
            let result = ""
            while(current){
                result += `${current.value} <->`;
                current = current.next
            }
            console.log(result);
        }
    }
};


const data = new linkedList();
data.print()
data.addValue(50)
data.addValue(50)
data.addValue(50)
data.addValue(50)
data.print()