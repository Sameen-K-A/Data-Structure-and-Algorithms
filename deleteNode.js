class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }

    addTolast(newValue){
        let newNode = new Node(newValue);
        if(this.isEmpty()){
            this.head = newNode
        } else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = newNode
        }
        this.size++;
    }

    print(){
        if(this.isEmpty()){
            console.log("List is empty");
        } else{
            let current = this.head;
            let values = '';
            while(current){
                values += `${current.value} => `;
                current = current.next;
            }
            console.log(values);
        }
    }

    // remove a node from specific position

    removeNode(position){
        if(position <0 || position > this.size){   // scenario 1
            return null;
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
}

const data = new LinkedList();
data.print()
data.addTolast(100);
data.addTolast(300);
data.addTolast(200);
data.addTolast(500);
data.addTolast(400);
data.print()
data.removeNode(10);
data.print()