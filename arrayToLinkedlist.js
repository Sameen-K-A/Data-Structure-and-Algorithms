
// ==========================================================================================================================================
// step 1

// class Node{
//     constructor(value){
//         this.next = null;
//         this.value = value
//     }
// };
// class linkedList{
//     constructor(){
//         this.head = null;
//         this.size = 0
//     }
//     arrayToLinkedList(array){
//         if(array.length === 0){
//             return null;
//         } else{
//             const head = new Node(array[0]);
//             this.head = head
//             this.size++
//             let tail = head;
//             for(let i=1 ; i<array.length ; i++){
//                 const newNode = new Node(array[i]);
//                 tail.next = newNode;
//                 tail = newNode;
//                 this.size++
//             };
//             tail.next = null;
//         }
//     }
//     print(){
//         if(this.size === 0){
//             console.log("linked list is empty");
//         } else{
//             let currentValue = this.head;
//             let result = '';
//             while(currentValue){
//                 result += `${currentValue.value} ->`;
//                 currentValue = currentValue.next
//             }
//             console.log(result);
//         }
//     }
// }

// const data = new linkedList();
// data.print();
// data.arrayToLinkedList([1,2,3,"sajh",5]);
// data.print()


//==============================================================================================================================================

// step 2 using normal function

class Node{
    constructor(value){
        this.next = null;
        this.value = value
    }
}
function arrayToLinkedList(array){
    if(array.length === 0){
        return null
    } else{
        let head = new Node(array[0]);
        let tail = head;
        for(let i=1 ; i<array.length ; i++){
            const newNode = new Node(array[i]);
            tail.next = newNode;
            tail = newNode
        }
        tail.next = null;
        return head
    }
}

let data = arrayToLinkedList([1,2,3,4,5,6]);
while(data){
    console.log(data.value);
    data = data.next
}


//=======================================================================================================================================================