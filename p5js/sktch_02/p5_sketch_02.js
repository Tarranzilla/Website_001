class Tree {
    constructor() {
        this.root = null;
    }
    addNode(n) {
        if (this.root == null) {
            this.root = n;
        } else {
            this.root.addNode(n);
        }
    }
}

class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

var tree;
var n;

function setup() {
    tree = new Tree();
    n = new Node(5);
    tree.addNode(n);

    console.log(tree);
}
