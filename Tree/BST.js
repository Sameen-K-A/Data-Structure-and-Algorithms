class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Queue {
    constructor() {
        this.Array = [];
        this.size = 0;
        this.first = 0;
        this.last = 0;
    }

    enqueue(value) {
        this.Array[this.last] = value;
        this.size++;
        this.last++
    }

    dequeue() {
        if (this.size === 0) {
            return false;
        }
        const element = this.Array[this.first];
        delete this.Array[this.first];
        this.size--;
        this.first++;
        return element;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    insert(value, root = this.root) {
        if (root === null) {
            this.root = new Node(value);
            return true;
        }
        if (value > root.value) {
            if (root.right === null) {
                root.right = new Node(value)
            } else {
                this.insert(value, root.right);
            }
        } else {
            if (root.left === null) {
                root.left = new Node(value)
            } else {
                this.insert(value, root.left);
            }
        }
    }

    search(value, root = this.root) {
        if (root === null) {
            return false;
        }
        if (root.value === value) {
            return true;
        } else {
            if (root.value > value) {
                return this.search(value, root.left);
            } else {
                return this.search(value, root.right);
            }
        }
    }

    /*
        We can traverse through the tree in different ways. There are mainly two ways: 
        Depth First Search (DFS) and Breadth First Search (BFS).
        DFS starts from the root node and visits possible left nodes, then visits right nodes. We can traverse in three types in DFS:

        1. Pre-order
        2. In-order
        3. Post-order"

        Traverse using BFS we can only method that level order traversal
    */

    // first visit the root node then visit all left node finally visit right node

    PreOrder(root = this.root) {
        if (root) {
            console.log(root.value);
            this.PreOrder(root.left);
            this.PreOrder(root.right)
        }
    }

    // first visit the leave left node then visit parant node finally visit all right node

    inOrder(root = this.root) {
        if (root) {
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right)
        }
    }

    // first visit the leave left node then visit right node then visit parant node. here root node found in last

    postOrder(root = this.root) {
        if (root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }

    /*
        Level order is also known as Breadth First Search. Here, the algorithm follows level-by-level traversal.
        It starts from the root node, then moves to the left node, and then the right node.
        Here, I use queue operations with array methods `push` and `shift`.
        The time complexity of `push` is O(1), but I don't suggest using `shift` operation due to its time complexity of O(n).
        I recommend using an optimized queue implementation.
    */


    // levelOrder(root = this.root) {
    //     const queue = [];
    //     queue.push(root);
    //     while (queue.length !== 0) {
    //         let current = queue.shift();
    //         console.log(current.value);
    //         if (current.left) {                          // using array method don't suggested
    //             queue.push(current.left)
    //         }
    //         if (current.right) {
    //             queue.push(current.right)
    //         }
    //     }
    // }

    levelOrder(root = this.root) {
        if (root) {
            const queue = new Queue();
            queue.enqueue(root);
            while (queue.size !== 0) {
                let elem = queue.enqueue();                 // using optimized queue;
                console.log(elem.value);
                if (elem.left) {
                    queue.enqueue(elem.left)
                }
                if (elem.right) {
                    queue.enqueue(elem.right)
                }
            }
        }
    }

}

const a = new Tree();
a.insert(50)
a.insert(70)
a.insert(60)
a.insert(80)
a.insert(20)
a.insert(10)
a.insert(30)