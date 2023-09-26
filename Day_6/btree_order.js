class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  setTree(value, left = null, right = null) {
    return new Node(value, left, right);
  }

  preorder(node, result = []) { // 전위 순회
    if (node !== null) {
      result.push(node.value);
      this.preorder(node.left, result);
      this.preorder(node.right, result);
    }
    return result;
  }

  inorder(node, result = []) { // 중위 순회
    if (node !== null) {
      this.inorder(node.left, result);
      result.push(node.value);
      this.inorder(node.right, result);
    }
    return result;
  }

  postorder(node, result = []) { // 후위 순회
    if (node !== null) {
      this.postorder(node.left, result);
      this.postorder(node.right, result);
      result.push(node.value);
    }
    return result;
  }
}

const tree = new Tree();
const node1 = tree.setTree(1, null, null);
const node4 = tree.setTree(4, null, null);
const node3 = tree.setTree(3, node1, node4);
const node6 = tree.setTree(6, null, null);
const node5 = tree.setTree(5, node3, node6);
tree.root = node5;

console.log(tree.preorder(tree.root)); // [5, 3, 1, 4, 6]
console.log(tree.inorder(tree.root)); // [1, 3, 4, 5, 6]
console.log(tree.postorder(tree.root)); // [1, 4, 3, 6, 5]