class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Linked{
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
            this.head = newNode
        } else{
            newNode.next = this.head;
            this.head = newNode
        }
        this.size++
    }

    print(){
        if(this.isEmpty()){
            console.log("Linked list is empty");
        } else{
            let current = this.head;
            let values = '';
            while(current){
                values += `${current.value} => `
                current = current.next;
            }
            console.log(`${values}`);
        }
    }

    sumof3(){
        if(this.size < 3){
            return console.log(`3 node minimum need`);
        }
        let current = this.head;
        let result = 0;
        if(this.size === 3){
            while(current){
                result += current.value;
                current = current.next;
            }
            return console.log(result);
        } else{
            let midIndex = Math.floor(this.size / 2);
            let previous = null;
            let currentIndex = 0;
            while(current){
                if(midIndex === currentIndex){
                    result += previous.value
                    result += current.value
                    result += current.next.value;
                    return console.log(result);
                }
                currentIndex++
                previous = current;
                current = current.next
            }
        }
    }
}



const a = new Linked();
a.addToFirst(1)
a.addToFirst(3)
a.addToFirst(2)
a.addToFirst(4)
a.addToFirst(5)
a.addToFirst(5)
a.addToFirst(3)
a.addToFirst(7)
a.addToFirst(8)
a.sumof3()