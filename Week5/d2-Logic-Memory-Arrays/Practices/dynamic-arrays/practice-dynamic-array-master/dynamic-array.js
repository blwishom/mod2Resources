class DynamicArray {

  constructor(defaultSize=4) {

    // Fill this out
    this.data = new Array(defaultSize)
    this.capacity = defaultSize;
    this.length = 0

  }

  read(index) {

    // Fill this out
    // You may not use any built-in JS array functions
    if (index >= this.length) return undefined;
    return this.data[index];
  }

  unshift(val) {

    // Fill this out
    // You may not use any built-in JS array functions
    if (this.length >= this.capacity) this.resize();

    for (let i = this.length; i > 0; i--){
      this.data[i] = this.data[i -1]
    }
    this.data[0] = val;
    this.length++;

  }
  resize() { }

}


module.exports = DynamicArray;
