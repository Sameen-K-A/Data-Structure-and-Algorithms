class MaxHeap {
    constructor() {
        this.heap = [];
    }

    parent(index) {
        return Math.floor((index - 1) / 2);
    }

    findLeft(index) {
        return 2 * index + 1;
    }

    findRight(index) {
        return 2 * index + 2;
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
    }

    insert(value) {
        this.heap[this.heap.length] = value;
        this.heapifyUp(this.heap.length - 1)
    }

    heapifyUp(index) {
        let current = index;
        while (current > 0 && this.heap[current] > this.heap[this.parent(current)]) {
            this.swap(current, this.parent(current));
            current = this.parent(current);
        }
    }

    delete() {
        if (this.heap.length === 0) {
            return null;
        }
        if (this.heap.length === 1) {
            return this.heap = [];
        }
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heapifyDown(0);
    }

    heapifyDown(index) {
        let largest = index;
        const left = this.findLeft(index);
        const right = this.findRight(index);
        if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
            largest = left;
        }
        if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
            largest = right;
        }
        if(largest != index) {
            this.swap(index , largest);
            this.heapifyDown(largest)
        }
    }
}

const heap = new MaxHeap();
heap.insert(50);
heap.insert(90);
heap.insert(60);
heap.insert(40);
heap.insert(100);
heap.insert(30);
heap.delete();
console.log(heap);