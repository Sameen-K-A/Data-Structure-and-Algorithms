class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.previous = null
    }
}

class linkedList{
    constructor(){
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    getSize(){
        return this.size
    }

    isEmpty(){
        return this.size === 0;
    }

    addToFirst(newValue){
        const newNode = new Node(newValue);
        if(this.isEmpty()){
            this.head = newNode;
            this.tail = newNode;
        } else{
            this.head.previous = newNode;
            newNode.next = this.head;
            this.head = newNode
        }
        this.size++;
    };

    reverse(){
        if(this.isEmpty()){
            console.log("List is empty");
        } else{
            let last = this.tail;
            let reversedResult = '';
            while(last){
                reversedResult += `${last.value} <=>`;
                last = last.previous;
            };
            console.log(reversedResult);
        }
    }
    
    print(){
        if(this.isEmpty()){
            console.log("List is empty");
        } else{
            let current = this.head;
            let values ='';
            while(current){
                values += `${current.value} <=> `;
                current = current.next;
            }
            console.log(values);
        }
    }
};



const checking = new linkedList();
checking.addToFirst(100);
checking.addToFirst(50);
checking.addToFirst(70);
checking.addToFirst(10);
checking.addToFirst(40);
checking.addToFirst(20);
checking.print();
checking.reverse();