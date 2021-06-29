class NumSorter {
  constructor(maxNums) {
    this.maxNums = maxNums;
    this.allowedNums = [];
    this.numList = [];
  }

  // Add a number to the list of allowed numbers
  // Should not have any duplicates in allowedNums
  addAllowedNum(num) {
    if (!this.allowedNums.includes(num)) {
      this.allowedNums.push(num);
    }
  }

  // Returns the count of nums in numList
  numCount() {
    let count = 0;
    while (this.numList[count] !== undefined) {
      count++;
    }
    return count;
  }

  // Returns true if the number is allowed, false otherwise
  isNumAllowed(num) {
    return this.allowedNums.includes(num);
  }

  // Build a numlist of integers from 0 to amount.
  // Only include allowed numbers
  buildNumList(amount) {

    this.numList = [];

    for (let i = 0 ; i <= amount ; i++) {
      if (this.isNumAllowed(i)) {
        this.numList.push(i);
      }
    }
  }

  // Remove and return the first number in the numList
  // If numList is empty, return undefined
  getFirstNum() {
    return this.numList.shift();
  }

  // Add a new number to the back of the numList
  addNumToBack(num) {
    if (this.isNumAllowed(num)) this.numList.push(num);
  }

}

module.exports = NumSorter;
