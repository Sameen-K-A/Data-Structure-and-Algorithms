class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
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
            if(root.value > value) {
                return this.search(value , root.left);
            } else {
                return this.search(value , root.right);
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
console.log(a.search(700));
console.log(a);