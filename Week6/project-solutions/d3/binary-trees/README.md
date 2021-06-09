# Binary Trees Project

Clone the project from the [starter].

## Learning Goals

* Construct a Binary Search Tree
* Search for data in a Binary Search Tree in logarithmic time
* Describe the properties and functionality of a Binary Tree
* Describe the properties and functionality of a Tree
* Traverse a Binary Tree in pre-order, in-order and post-order
* Traverse and Search a Tree in both Depth and Breadth-First order
* Solve coding challenges involving trees

## Part 1: Traversing Trees

As a refresher, a breadth-first traversal or search looks through all the
siblings on each level of a tree before moving to the next, while a depth-first
traversal looks down as far as possible through each child before going to the
next sibling.

Starter code is given to you at `tree-traversals.js`

## The Tree Node

Before we can actually build out these traversals, we have to start by creating
our own tree node implementation!

Recall that a node should have a value, a left pointer, and a right pointer.

## Breadth-First Traversal

Now that you have the basic building block of a tree, try to implement a
breadth-first traversal by writing a function that returns an array of the
values seen in order given the root tree node.

```javascript
  breadthFirstTraversal() {
    // initialize a queue with the root node 
    
    // while the queue is not empty 
      // print and remove first node in queue

      // if the node has a left node
        // push the left node on the back of the queue
      // if the node has a right node
        // push the right node on the back of the queue
  }
```

## Depth-First Traversals

In the reading, you've seen how a depth-first traversal iteratively with a
stack, but not the recursive traversals.

First, try to implement the iterative implementation of the depth-first
traversal without referencing the code in the reading.

```javascript
  depthFirstTraversal() {
    // initialize a stack with the root node 
    
    // while the stack is not empty 
      // print and remove first node in stack

      // if the node has a left node
        // push the left node on the back of the stack
      // if the node has a right node
        // push the right node on the back of the stack
  }
```

There are three ways to traverse a binary tree depth-first using recursion:
`pre-order`, `in-order`, and `post-order`. Try to implement these
traversals by printing out the values in the order specified.

### Pre-Order Traversal

A pre-order traversal accesses the value of a node *before* recursively
descending to the left and right:

```javascript
  preOrderTraversal () {
    // Print value at current node

    // Recursively print values from left sub tree
    // Recursively print values from right sub tree
  }
```

### In-Order Traversal

An in-order traversal accesses the value of the node after recursively
descending to the left, but before the right:

```javascript
  inOrderTraversal () {
    // Recursively print values from the left sub tree

    // Print value at current node

    // Recursively print values from right sub tree
  }
```

### Post-Order Traversal

A post-order traversal accesses the value of the node *after* recursively
descending to the left and right:

```javascript
  postOrderTraversal () {
    // Recursively print values from left sub tree
    // Recursively print values from right sub tree

    // Print value at current node
  }
```

## Part 2: Practice Problems

Now that you've gotten a hang of tree traversal, lets try putting that
knowledge to use. Be sure to inspect the test files and follow Polya's problem
solving framework to understand the problems.

Starter file is located at `tree-practice.js`

### Find Min/Max of Binary Search Tree

Fill out `findMinBST` and `findMaxBST` which take in the root node of a _binary
search tree_ and returns the min and max value respectively.

You should be able to solve this in _O(log n)_ time.

### Find Min/Max of Binary Tree

Fill out `findMinBT` and `findMaxBT` which take in the root node of a _binary
tree_ and returns the min and max value respectively.

How does this differ from finding the min value in a binary search tree? What
is the time complexity of this operation?

### Get Height

Fill out `getHeight` which takes the root node of a _binary tree_ and returns
the tree's height. The height of a tree is the number of edges between the
root and its furthest leaf.

Example:

```plaintext
    Input:
            1
           / \
          3   2
         /
        5

    Output: 2
```

### Count Nodes

Fill out `countNodes` which takes the root node of a _binary tree_ and returns
the number of nodes contained in the tree.

### Balanced Binary Tree

Given a binary tree, determine if it is height-balanced.

A height-balanced binary tree is defined as a binary tree in which the left and
right subtrees of every node differ in height by no more than 1.

Example:

```plaintext
    Input:              Output: True, height of left is 1, while right is 2
          3 
         / \
        9  20
          /  \
         15  7

    Input:              Output: False, height of left is 3, while right is 1
          1
         / \
        2   2
       / \
      3   3
     / \
    4   4

```

### Get Parent Node

Fill out `getParentNode` which takes the root node of a _binary tree_ and a
target value and returns the node that points to the target value.

If the target cannot be found in the tree, `getParentNode` should return
`undefined`.

If the target is in the tree but has no parent, `getParentNode` should return
`null`.



### In-Order Predecessor

Fill out `inOrderPredecessor` which takes the root node of a _binary tree_ and
a target value and returns the node that comes before the target value in an
in-order traversal.

If the target is the first value in an in-order traversal, return `null`.

```plaintext
    target: 4
    Input:
          4
        /   \
       2     6
      / \   / \
     1   3 5   7

    Output: 3
```

### Delete Node in a Binary Search Tree

Fill out `inOrderPredecessor` which takes the root node of a _binary tree_ and
a target, and deletes the target node.

To delete a node with no children, set its parent's pointer to `null`.

To delete a node with one child, replace it with it's child. This operation is
similar to deleting a node in a linked list.

To delete a node with two children, replace the target node's value with its
_in-order predecessor_, then delete the in-order predecessor. You may need to
do some additional research for details on this operation.

If the target value is not in the tree, return `undefined`.

Example:

```plaintext
    Input:
    Tree:               Target: 5
            5
           / \
          3   6
         / \   \
        2   4   7

    Output:
            4
           / \ 
          3   6
         /     \
        2       7
```



[starter]: https://github.com/appacademy-starters/algorithms-binary-trees-starter
