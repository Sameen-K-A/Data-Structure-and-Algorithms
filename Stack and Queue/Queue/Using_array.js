class Queue{
    constructor(){
        this.array = [];
        this.frontIndex = 0;
        this.lastIndex = 0;
        this.size = 0;
    }

    push(value){
        this.array[this.lastIndex] = value;
        this.size++;
        this.lastIndex++;
    }

    shift(){
        if(this.size===0){
            return false;
        }
        for(let i=this.frontIndex ; i<this.lastIndex  ;i++){
            this.array[i] = this.array[i+1];
        }
        this.lastIndex -= 1;
        this.size--;
    }

    print(){
        if(this.size === 0){
            return console.log("Array is empty");
        } else{
            return console.log(this.array);
        }
    }
}

const q = new Queue();
q.push(50)
q.push(40)
q.push(30)
q.push(20)
q.push(10)
q.shift()
q.print()