class Node{
    constructor(value){
        this.next = null;
        this.value = value
    };
}

class linkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    isEmpty(){
        return this.size === 0
    }
    addValue(newValue){
        const newNode = new Node(newValue);
        if(this.isEmpty()){
            this.head = newNode
        } else{
            let current = this.head;
            while(current.next){
                current = current.next
            }
            current.next = newNode
        }
        this.size++
    }
    print(){
        if(this.isEmpty()){
            console.log("List is empty");
        } else{
            let current = this.head;
            let result = ''
            while(current){
                result += `${current.value} `;
                current = current.next
            }
            console.log(result);
        }
    }
}

const data = new linkedList();
data.print();
data.addValue(20)
data.addValue(80)
data.addValue(50)
data.addValue(0)
data.addValue(20);
data.print()