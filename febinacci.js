class Node{
    constructor(value){
        this.next = null;
        this.value = value;
    }
};

class linkedList{
    constructor(){
        this.size = 0;
        this.head = null;
    };

    isEmpty(){
        return this.size === 0;
    };

    getSize(){
        return this.size;
    };

    addToLast(newValue){
        const newNode = new Node(newValue);
        if(this.isEmpty()){
            this.head = newNode
        } else{
            let current = this.head;
            while(current.next){
                current = current.next;
            };
            current.next = newNode;
        };
        this.size++
    }

    febonacci(){
        if(this.size < 2){
            console.log("Linked list element is not available for febinacci")
        } else{
            let firstValue = this.head;
            let secondValue = this.head.next;
            for (let i = 0; i < 10; i++) {
                let newValue = firstValue.value + secondValue.value;
                this.addToLast(newValue);
                firstValue = secondValue;
                secondValue = secondValue.next;
            }
        }
    };

    print(){
        if(this.isEmpty()){
            console.log("Linked list is empty");
        } else{
            let current = this.head;
            let values = '';
            while(current){
                values += `${current.value} `;
                current = current.next;
            }
            console.log(values);
        }
    }
}

const linkedData = new linkedList();
linkedData.addToLast(50);
linkedData.addToLast(40);
linkedData.febonacci();
linkedData.print();