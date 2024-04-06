class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
};

class linkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    };
    checkEmpty(){
        return this.size === 0;
    };
    addToFirst(newValue){
        const newNode = new Node(newValue);
        if(this.checkEmpty()){
            this.head = newNode;
        } else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++
    };
    addToLast(newValue){
        const newNode = new Node(newValue);
        if(this.checkEmpty()){
            this.head = newNode;
        } else{
            let currentValue = this.head;
            while(currentValue.next){
                currentValue = currentValue.next;
            };
            currentValue.next = newNode;
        }
        this.size++
    }
    print(){
        if(this.checkEmpty()){
            console.log("Linked list is empty");
        } else{
            let currentValue = this.head;
            let linkedValue = '';
            while(currentValue){
                linkedValue += `${currentValue.value} `;
                currentValue = currentValue.next
            };
            console.log(linkedValue);
        }
    }
}

const data = new linkedList();
data.addToFirst(10);
data.addToFirst(12);
data.addToFirst(13);
data.addToFirst(14);
data.print()
data.addToLast(100)
data.addToLast(200)
data.addToLast(300)
data.addToLast(400)
data.print()