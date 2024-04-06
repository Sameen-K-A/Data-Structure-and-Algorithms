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

    deleteSpecific(value){
        let current =  this.head;
        if(current.value === value){
            this.head = current.next;
            this.size--
            return
        } else{
            let previous = null;
            while(current.next){
                previous = current
                current = current.next;
                if(current.value === value){
                    previous.next = current.next;
                    this.size--
                    return
                }
            }
        }
        return null
    }

    addToIndex(newValue , index){
        if(this.isEmpty() || this.size < index){
            return null;
        } else{
            let previous = this.head
            let position = 0;
            while(position < index-1){
                position++;
                previous = previous.next;
            }
            const newNode = new Node(newValue);
            newNode.next = previous.next;
            previous.next = newNode;
            this.size++
        }
    }
}


const a = new Linked();
a.addToFirst(100)
a.addToFirst(300)
a.addToFirst(200)
a.addToFirst(400)
a.addToFirst(500)
a.print()
a.addToIndex(1000 , 3);
a.print();
a.deleteSpecific(500);
a.print();
