const array = [4, 3, 6, 1, 9, 7, 4, 0, 3];


// bubble sort

function bubble(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}



// insertion sort

function insertion(array) {
    for (let i = 1; i < array.length; i++) {
        let current = array[i];
        let j = i - 1;
        while (j >= 0 && current < array[j]) {
            array[j + 1] = array[j];
            j--
        }
        array[j + 1] = current;
    }
    return array;
}




//selection sort

function selection(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let smallIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[smallIndex] > array[j]) {
                smallIndex = j;
            }
        }
        if (smallIndex !== i) {
            let temp = array[i];
            array[i] = array[smallIndex];
            array[smallIndex] = temp
        }
    }
    return array;
}



// quick sort
function quick(array) {
    if (array.length <= 1) {
        return array;
    }
    let select = array[0];
    const left = [];
    const right = [];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < select) {
            left[left.length] = array[i];
        } else {
            right[right.length] = array[i]
        }
    }
    return [...quick(left), select, ...quick(right)];
}



// merge sort

function merge(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return sort(merge(left), merge(right));
}
function sort(left, right) {
    const result = [];
    while(left.length !== 0 && right.length !== 0){
        if (left[0] < right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    return [...result , ...left , ...right];
}


// console.log("After bubble sort ", bubble(array));
// console.log("After insertion sort ", insertion(array));
// console.log("After selection sort ", selection(array));
// console.log("After quick sort ", quick(array));
// console.log("After merge sort ", merge(array));



class HashTable{
    constructor(size){
        this.size = size;
        this.table = new Array(size);
    }

    hash(key){
        if(!key || key.length === 0){
            return "Enter valid key"
        }
        let hashCodeIndex = 0;
        for(let i=0 ; i<key.length ; i++){
            hashCodeIndex += key[i].charCodeAt();
        }
        return hashCodeIndex % this.size;
    }

    set(key , value){
        if(!key || !value || key.length === 0){
            return "Enter valid key value pair"
        }
        const index = this.hash(key);
        this.table[index] = {key , value};
        return true;
    }

    get(key){
        if(!key || key.length == 0){
            return "Enter valid key"
        }
        const index = this.hash(key);
        if(this.table[index] && this.table[index].key === key){
            return this.table[index]
        } else{
            return undefined;
        }
    }

    remove(key){
        if(!key || key.length === 0){
            return "Enter valid key"
        }
        const index = this.hash(key);
        if(!this.table[index] && this.table[index].key !== key){
            return 'key not found'
        } else{
            this.table[index] = undefined;
            return "key and value removed"
        }
    }

}

const table = new HashTable(50);
table.set("name" ,  "sameen")
table.set("age" ,  20)
console.log(table.remove("age"));
console.log(table);