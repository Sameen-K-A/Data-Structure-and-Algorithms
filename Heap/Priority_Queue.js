class Priority_Queue {
    constructor() {
        this.queue = [];
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
        [this.queue[index1], this.queue[index2]] = [this.queue[index2], this.queue[index1]]
    }

    enqueue(value, priority) {
        this.queue[this.queue.length] = { value, priority };
        this.queueUp(this.queue.length - 1);
    }

    queueUp(index) {
        let current = index;
        while (current > 0 && this.queue[current].priority < this.queue[this.parent(current)].priority) {
            this.swap(current, this.parent(current));
            current = this.parent(current);
        }
    }

    dequeue() {
        if (this.queue.length === 0) return null;
        let data = this.queue[0];
        if (this.queue.length === 1) {
            this.queue = [];
            return data;
        }
        this.queue[0] = this.queue[this.queue.length - 1];
        this.queue.pop();
        this.dequeueDown(0);
        return data;
    }

    dequeueDown(index) {
        let smallest = index;
        const left = this.findLeft(index);
        const right = this.findRight(index);
        if (left < this.queue.length && this.queue[left].priority < this.queue[smallest].priority) {
            smallest = left;
        }
        if (right < this.queue.length && this.queue[right].priority < this.queue[smallest].priority) {
            smallest = right;
        }
        if (index !== smallest) {
            this.swap(smallest, index);
            this.dequeueDown(smallest);
        }
    }
}
const PRQ = new Priority_Queue();
PRQ.enqueue("Dinner" , 4);
PRQ.enqueue("Tea" , 3)
PRQ.enqueue("Breakfast" , 1);
PRQ.enqueue("Lunch" , 2);
PRQ.dequeue()
console.log(PRQ);