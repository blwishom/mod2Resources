const sha256 = require("js-sha256");

// Do not change this
class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  constructor(numBuckets = 4) {
    // fill this in
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(numBuckets).fill(null);
  }

  hash(key) {
    // fill this in
    //first 8 chars of sha256 hash
    const hashHexString = sha256(key).slice(0, 8);
    //convert to integer
    return parseInt(`0x${hashHexString}`);
  }

  hashMod(key) {
    // fill this in
    //get the index after hashing
    return this.hash(key) % this.capacity;
  }

  insert(key, value) {
    // fill this in
    const index = this.hashMod(key);

    let currentPair = this.data[index] //this.data[index] == this.head
    while (currentPair && currentPair.key !== key) {
      currentPair = currentPair.next;
    }
    if (currentPair) {
      currentPair.value = value;
    } else {
      const newPair = new KeyValuePair(key, value)
      newPair.next = this.data[index];
      this.data[index] = newPair;
      this.count++;
    }
  }
}

module.exports = HashTable;
