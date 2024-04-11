
// ============================================================== DSA First week =======================================================================

// const array = [1,2,3,4,5];
// for(let i=1 ; i<array.length ; i++){
//     array[0] = array[0] + array[i]
// }
// console.log(array[0]);


// const A = 5;
// function recursion(number){
//     if(number === 1){
//         return "1 "
//     } else{
//         return recursion(number-1) + `${number} ` ;
//     }
// }

// console.log(recursion(A));


const A = [6, 3, 3, 6, 7, 8, 7, 3, 7];

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class linked{
    constructor(){
        this.head = null;
        this.size = 0;
        this.tail = null;
    }
    print(){
        if(this.head === null){
            return console.log("Linked listt is empty");
        } else{
            let current = this.head;
            let result = '';
            while(current){
                result += `${current.value} => `
                current = current.next;
            }
            return console.log(result);
        }
    }
    addTolast(newValue){
        const newNode = new Node(newValue)
        if(this.head === null){
            this.head = newNode;
        } else{
            let current = this.head;
            while(current.next){
                current = current.next
            }
            current.next = newNode;
        }
        this.size++
    }
    arrayToLinked(array){
        if(array.length === 0){
            return false;
        } else{
            for(let i=0 ; i<array.length ; i++){
                this.addTolast(array[i]);
            }
        }
        return
    }
}

const data = new linked();
data.arrayToLinked(A);
data.print();