// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    // Fill this in
    this.root = null;
  }

  insert(val, currentNode = this.root) {
    // Fill this in
    if (!this.root) {
      //if there is no root

      this.root = new TreeNode(val);
      return;
    }
    if (val < currentNode.val) {
      //if val is less than the value of current node
      if (!currentNode.left) {
        //if there is no left, assign the left with new node
        currentNode.left = new TreeNode(val);
      } else {
        this.insert(val, currentNode.left); //otherwise recursively call until there is no left
      }
    } else {
      //if the val is greater than the value of current node
      if (!currentNode.right) {
        //if no right, assign right to new node
        currentNode.right = new TreeNode(val);
      } else {
        this.insert(val, currentNode.right); //otherwise recursively call until there is no right
      }
    }
  }
  //moiz's and zane's amazing code
  // search(val, cur = this.root) {
  //   // let compare = cur.val - val;
  //   if (cur.val === val) return true;
  //   if (cur.val > val) {
  //     if (!cur.left) return false;
  //     return this.search(val, cur.left);
  //   } else if (cur.val < val) {
  //     if (!cur.right) return false;
  //     return this.search(val, cur.right);
  //   }
  // }
  search(val) {
    // Fill this in
    let currentNode = this.root;
    while (currentNode) {
      if (val < currentNode.val) {
        currentNode = currentNode.left;
      } else if (val > currentNode.val) {
        currentNode = currentNode.right;
      } else {
        return true;
      }
    }
    return false;
  }

  preOrderTraversal() {
    // Fill this in
  }

  inOrderTraversal() {
    // Fill this in
  }

  postOrderTraversal() {
    // Fill this in
  }
}

module.exports = BinarySearchTree;
