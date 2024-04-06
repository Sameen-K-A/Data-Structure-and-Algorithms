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
    // give a vale and find that value index;

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

const data = new LinkedList();
data.print()
data.addTolast(100);
data.addTolast(300);
data.addTolast(200);
data.addTolast(500);
data.addTolast(400);
data.print()
data.search(50000)