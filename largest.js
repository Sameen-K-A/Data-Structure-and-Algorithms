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

    // largest value in list 

    largest(){
        let largest = 0;
        if(this.isEmpty()){
            return console.log("Can't find largest because list is empty");
        }
        if(this.size === 1){
            return console.log(`largest value is ${this.head.value}`);
        } else{
            let current = this.head;
            while(current){
                if(largest < current.value){
                    largest = current.value;
                }
                current = current.next;
            }
            return console.log(`largest value is ${largest}`);
        }
    }

    // second largest value in list
    secondLarge(){
        let largest = 0;
        let secondLargest = 0;
        if(this.isEmpty() || this.size < 2){
            return false;
        } else{
            let current = this.head;
            while(current){
                if(largest < current.value){
                    secondLargest = largest;
                    largest = current.value
                }
                current = current.next;
            }
            return console.log(`Second Largest value is ${secondLargest}`);
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
list.print()
list.addTolast(100)
list.print()
list.largest()
list.addTolast(100)
list.addTolast(200)
list.addTolast(300)
list.addTolast(400)
list.addTolast(500)
list.addTolast(560)
list.addTolast(550)
list.addTolast(600);
list.largest()
list.secondLarge()