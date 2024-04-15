class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class Queue{
    constructor(){
        this.front = null;
        this.back = null;
        this.size = 0;
    }

    push(newValue){
        const newNode = new Node(newValue);
        if(this.front === null){
            this.front = newNode;
            this.back = newNode;
        } else{
            this.back.next = newNode;
            this.back = newNode;
        }
        this.size++;
    }

    shift(){
        if(this.front === null){
            return null;
        } else{
            this.front = this.front.next;
        }
        this.size--
    }

    print(){
        if(this.front === null){
            return console.log("Queue is empty");
        } else{
            let current = this.front;
            let QueueResult = '';
            while(current){
                QueueResult += `${current.value} > `;
                current = current.next;
            }
            return console.log(QueueResult);;
        }
    }

    length(){
        return console.log(this.size);
    }

    peek(){
        return console.log(this.front === null ? null : this.front.value)
    }
}



const q = new Queue();
q.push(20);
q.push(30);
q.push(40);
q.push(50);
q.push(60);
q.print()
q.peek();
q.length();