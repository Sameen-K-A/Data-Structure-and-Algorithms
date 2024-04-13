class Node{
    constructor(value){
        this.next = null;
        this.value = value;
    }
}


class Stack{
    constructor(){
        this.size = 0;
        this.head = null;
    }

    push(newValue){
        const newNode = new Node(newValue);
        if(this.head === null){
            this.head = newNode
        } else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    pop(){
        if(this.head === null){
            return null;
        } else{
            this.head = this.head.next;
        }
        this.size--;
    }

    print(){
        if(this.head === null){
            return console.log("Stack is empty");
        } else{
            let current = this.head;
            let result = '';
            while(current){
                result+= `${current.value} -> `;
                current = current.next;
            }
            console.log(result);
        }
    }

    length(){
        return this.size;
    }

    
}


const stack =  new Stack();
stack.push(50)
stack.push(70)
stack.push(30)
stack.print()
console.log(stack.length());