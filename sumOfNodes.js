class Node{
    constructor(value){
        this.value = value;
        this.next = null
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

    addToFirst(newValue){
        const newNode = new Node(newValue);
        if(this.isEmpty()){
            this.head = newNode;
        } else{
            newNode.next = this.head;
            this.head = newNode
        }
        this.size++
    }

    print(){
        if(this.isEmpty()){
            console.log("NO NODES FOUND");
        } else{
            let current = this.head;
            let result = '';
            while(current){
                result += `${current.value} => `
                current = current.next;
            }
            console.log(result);
        }
    }

    sum(){
        if(this.isEmpty()){
            console.log(0);
        } else{
            let current = this.head;
            let result = 0;
            while(current){
                result += current.value
                current = current.next;
            }
            console.log(result);
        }
    }
}



const linkedData = new LinkedList();
linkedData.print()
linkedData.addToFirst(10)
linkedData.print()
linkedData.addToFirst(20)
linkedData.addToFirst(30)
linkedData.addToFirst(40)
linkedData.addToFirst(50)
linkedData.print()
linkedData.sum()