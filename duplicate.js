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

    // find duplicate values in sorted linked list=======================================================================
    find_sort_duplicate(){
        let current = this.head;
        let duplicateValues = '';
        while(current){
            if(current.next && current.value === current.next.value){
                duplicateValues += `${current.value} `;
                let value = current.value;
                while(current && current.value === value){
                    current = current.next
                }
            } else{

                current = current.next;
            }
        }
        return console.log(`duplicate values is ${duplicateValues}`);
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
list.addTolast(100)
list.addTolast(200)
list.addTolast(300)
list.addTolast(400)
list.addTolast(500)
list.addTolast(500)
list.addTolast(560)
list.addTolast(550)
list.addTolast(550)
list.addTolast(550)
list.addTolast(600);
list.addTolast(600);
list.print()
list.find_sort_duplicate()