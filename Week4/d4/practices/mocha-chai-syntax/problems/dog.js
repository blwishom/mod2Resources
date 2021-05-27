class Dog {
  constructor(name, age, tricks = []) {
    this.name = name;
    this.age = age;
    this.tricks = tricks;
  }

  haveBirthday() {
    this.age++;
    return this.age;
  }

  learnTrick(trick) {
    this.tricks.push(trick);
    return this.numTricks();
  }

  numTricks() {
    return this.tricks.length;
  }
}

module.exports = Dog;

// let arr1 = [1, 2, 3]
// let arr2 = [1, 2, 3]
// let arr3 = arr1;

// console.log(arr1 === arr2)
// console.log(arr1 === arr3)