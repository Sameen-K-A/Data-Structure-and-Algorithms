
// In this code, I use a min-heap because I'm sorting an array into ascending order.

class minHeap {
    constructor() {
        this.heap = [];
    }

    parent(index) {
        return Math.floor((index - 1) / 2)
    }

    leftNode(index) {
        return 2 * index + 1;
    }

    rightNode(index) {
        return 2 * index + 2;
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
    }

    insert(value) {
        this.heap[this.heap.length] = value;
        this.heapifyUp(this.heap.length - 1);
    }

    heapifyUp(index) {
        let current = index;
        while (current > 0 && this.heap[current] < this.heap[this.parent(current)]) {
            this.swap(current, this.parent(current));
            current = this.parent(current);
        }
    }

    delete() {
        if (this.heap.length === 0) return false;
        const deletedValue = this.heap[0]
        if (this.heap.length === 1) {
            this.heap = [];
        }
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.length--;
        this.heapifyDown(0);
        return deletedValue;
    }

    heapifyDown(index) {
        let current = index;
        const left = this.leftNode(index);
        const right = this.rightNode(index)
        if (left < this.heap.length && this.heap[left] < this.heap[current]) {
            current = left
        }
        if (right < this.heap.length && this.heap[right] < this.heap[current]) {
            current = right;
        }
        if (current !== index) {
            this.swap(index, current);
            this.heapifyDown(current)
        }
    }
}



const heap_sort = (array) => {
    const newheap = new minHeap();
    for(let arrayElems of array){
        newheap.insert(arrayElems)
    }
    let arrayIndex = 0;
    while(newheap.heap.length > 0){
        array[arrayIndex] = newheap.delete();
        arrayIndex++;
    }
    return array;
}



const array = [4,2,5,7,8,1,2,4,3,2,7,3,9,0,6];
console.log("Before sorting " , array);
console.log("After sorting " , heap_sort(array));