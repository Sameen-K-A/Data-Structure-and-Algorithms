class minHeap {
    constructor() {
        this.heap = [];
    }

    findLeft(index) {
        return 2 * index + 1;
    }

    findRight(index) {
        return 2 * index + 2;
    }

    parent(index) {
        return Math.floor((index - 1) / 2)
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
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
        if (this.heap.length === 0) {
            return null;
        }
        if (this.heap.length === 1) {
            return this.heap = [];
        }
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop()
        this.heapifyDown(0);
    }

    heapifyDown(index) {
        let smallest = index;
        const left = this.findLeft(index);
        const right = this.findRight(index);
        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }
        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right;
        }
        if (index !== smallest) {
            this.swap(index, smallest);
            this.heapifyDown(smallest);
        }
    }
}

const heap = new minHeap();
heap.insert(50)
heap.insert(60)
heap.insert(20)
heap.insert(80)
heap.insert(10)
heap.insert(5)
heap.delete()
console.log(heap);