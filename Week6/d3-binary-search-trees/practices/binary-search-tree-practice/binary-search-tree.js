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

  //Colton and Cam's beautiful creation
  // inOrderTraversal() {
  //   // Fill this in
  //   let data = [];
  //   function traverse(node) {
  //     if (node.left) {
  //       traverse(node.left);
  //     }
  //     data.push(node.val);
  //     if (node.right) {
  //       traverse(node.right);
  //     }
  //   }
  //   traverse(this.root);
  //   for (let i = 0; i < data.length; i++) {
  //     console.log(data[i]);
  //   }
  // }
  preOrderTraversal(currentNode = this.root) {
    // Fill this in
    if (!currentNode) return;
    console.log(currentNode.val);
    this.preOrderTraversal(currentNode.left);
    this.preOrderTraversal(currentNode.right);
  }

  inOrderTraversal(currentNode = this.root) {
    // Fill this in
    if (!currentNode) return;
    this.inOrderTraversal(currentNode.left);
    console.log(currentNode.val);
    this.inOrderTraversal(currentNode.right);
  }

  postOrderTraversal(currentNode = this.root) {
    // Fill this in
    if (!currentNode) return;
    this.postOrderTraversal(currentNode.left);
    this.postOrderTraversal(currentNode.right);
    console.log(currentNode.val);
  }
}

module.exports = BinarySearchTree;
