class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedData{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    addTolast(newValue){
        const newNode = new Node(newValue);
        if(this.isEmpty()){
            this.head = newNode;
        } else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    reverese(){
        if(this.isEmpty()){
            return console.log("Linked list is empty that why reverse is not working");
        } else{
            let previous = null;
            let current = this.head;
            while(current){
                let nextValue = current.next;
                current.next = previous;
                previous = current;
                current = nextValue
            }
            this.head = previous;
        }
    }

    print(){
        if(this.isEmpty()){
            console.log("no nodes values founded");
        } else{
            let current = this.head;
            let values = '';
            while(current){
                values += `${current.value} => `;
                current = current.next
            }
            console.log(values);
        }
    }
}

const list = new LinkedData();

let stringValue = "SAMEEN";
for (const character of stringValue) {
    list.addTolast(character)
}
list.print()
list.reverese();
list.print()