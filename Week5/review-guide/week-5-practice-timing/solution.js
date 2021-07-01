class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}
class Queue {
  constructor() {
    // Default to empty
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  enqueue(value) {
    const newNode = new LinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  dequeue() {
    if (!this.head) {
        return null;
    }
    const returnValue = this.head.value;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
    this.length--;
    return returnValue;
  }
}
class NumSorter {
  constructor(maxNums) {
    this.maxNums = maxNums;
    this.allowedNums = new Set();
    this.numList = new Queue();
  }
  // Add a number to the list of allowed numbers
  // Should not have any duplicates in allowedNums
  addAllowedNum(num) {
    this.allowedNums.add(num);
  }
  // Returns the count of nums in numList
  numCount() {
    return this.numList.length;
  }
  // Returns true if the number is allowed, false otherwise
  isNumAllowed(num) {
    return this.allowedNums.has(num);
  }
  // Build a numlist of integers from 0 to amount.
  // Only include allowed numbers
  buildNumList(amount) {
    this.numList = new Queue();
    for (let i = 0 ; i <= amount ; i++) {
      if (this.isNumAllowed(i)) {
        this.numList.enqueue(i);
      }
    }
  }
  // Remove and return the first number in the numList
  // If numList is empty, return undefined
  getFirstNum() {
    return this.numList.dequeue();
  }
  // Add a new number to the back of the numList
  addNumToBack(num) {
    if (this.isNumAllowed(num)) this.numList.enqueue(num);
  }
}
module.exports = NumSorter;