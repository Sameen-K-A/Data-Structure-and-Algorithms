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


    levelOrder_01(root = this.root) {
        const queue = [];
        queue.push(root);
        while (queue.length !== 0) {
            let current = queue.shift();
            console.log(current.value);
            if (current.left) {                          // using array method don't suggested
                queue.push(current.left)
            }
            if (current.right) {
                queue.push(current.right)
            }
        }
    }

    levelOrder_02(root = this.root) {
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

    min(root = this.root) {
        if (root === null) {
            return undefined;
        } else {
            while (root.left) {
                root = root.left;
            }
            return root.value;
        }
    }

    max(root = this.root) {
        if (root === null) {
            return undefined;
        } else {
            while (root.right) {
                root = root.right;
            }
            return root.value;
        }
    }

    deleteNode(value, root = this.root, parent = null) {
        if (root === null) {
            return console.log("Value not founded");
        }
        if (value < root.value) {
            return this.deleteNode(value, root.left, root);
        } else if (value > root.value) {
            return this.deleteNode(value, root.right, root);
        } else {

            // Delete leaf nodes, meaning nodes that have no children; left and right are null.
            if (root.left === null && root.right === null) {
                if (parent === null) {
                    this.root = null;
                } else {
                    if (parent.left === root) {
                        parent.left = null;
                    } else {
                        parent.right = null;
                    }
                }
            }

            // Delete a node only contain one single subtree (left or right)
            if (root.left === null || root.right === null) {
                const child = root.left !== null ? root.left : root.right;
                if (parent === null) {
                    this.root = child;
                } else {
                    if(parent.left === root) {
                        parent.left = child
                    } else {
                        parent.right = child;
                    }
                }
                return true;
            }

            //Delete node contain 2 nodes
            if (root.right !== null && root.left !== null) {
                const smallest = this.min(root.right);
                root.value = smallest;
                this.deleteNode(smallest, root.right);
                return true;
            }
        }
    }

    /*
        Here is a function to find the nearest value to the given value. Also, I use Math.abs(), 
        which is used to find the absolute value. For example, if we have a number like -17, the absolute value of -17 is 17.
    */

    nearestValue(value, root = this.root) {
        let result = null;
        const check = (node) => {
            if (node === null) {
                return;
            }
            if (result === null || Math.abs(node.value - value) < Math.abs(result - value)) {
                result = node.value
            }
            if (value > node.value) {
                check(node.right)
            } else if (value < node.value) {
                check(node.left)
            }
        }
        check(root);
        return result;
    }
}

const a = new Tree();
a.insert(50)
a.insert(70)
a.insert(80)
a.insert(20)
a.insert(10)
a.insert(30)
a.deleteNode(50)
console.log(a);