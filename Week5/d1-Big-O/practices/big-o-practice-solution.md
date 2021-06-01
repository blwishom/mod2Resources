15-20 minute exercise to identify the time and space complexity of simple algorithms

Only covering O(1), O(n), O(n^2)

```js
animals = ['alligator', 'bear', 'cat', 'dog', 'elephant', 'fish', 'goose', 'hamster', 'iguana', 'jaguar', 'kangaroo'];

// Count how many animals are in the list
// Time complexity: O(n)
// Space complexity: O(1)
function countAnimals(animals) {
  let count = 0;
  for (let i = 0 ; i < animals.length ; i++) {
    count++;
  }
  return count;
}

// Count how many animals are in the list
// Time complexity: O(1)
// Space complexity: O(1)
function countAnimals2(animals) {
  return animals.length;
}
// Instructor note: Discuss how it is possbile to count up n items in O(1)
// time. This is posisble because JS maintains a 'length' property in
// the Array object that updates when values are added/removed.


// Print the first 10 animals in the list
// Time complexity: O(1)
// Space complexity: O(1)
function printTenAnimals(animals) {
  if (animals.length < 10) {
    throw Error("not enough animals")
  }

  console.log(animals[0]);
  console.log(animals[1]);
  console.log(animals[2]);
  console.log(animals[3]);
  console.log(animals[4]);
  console.log(animals[5]);
  console.log(animals[6]);
  console.log(animals[7]);
  console.log(animals[8]);
  console.log(animals[9]);
}
// Instructor note: Remind students that O(10) is the same as O(1)


// Print out all the animals
// Time complexity: O(n)
// Space complexity: O(1)
function printAnimals(animals) {
  for (let i = 0 ; i < animals.length ; i++) {
    console.log(animals[i]);
  }
}
// Instructor note: It could be argued that printing n items to the console takes O(n) space but the code itself doesn't use extra space


// Print out all the animals twice
// Time complexity: O(n)
// Space complexity: O(1)
function printAnimalsTwice(animals) {
  for (let i = 0 ; i < animals.length ; i++) {
    console.log(animals[i]);
  }
  for (let j = 0 ; j < animals.length ; j++) {
    console.log(animals[j]);
  }
}
// Instructor note: Emphasize the difference between O(n^2) and O(2n)->O(n): Nested
// loops vs. sequential loops


// Print all possible pairs of animals
// Time complexity: O(n^2)
// Space complexity: O(1)
function printAnimalPairs(animals) {
  for (let i = 0 ; i < animals.length ; i++) {
    for (let j = 0 ; j < animals.length ; j++) {
      console.log(`${animals[i]} - ${animals[j]}`);
    }
  }
}


// Return an array containing all possible pairs of animals
// Time complexity: O(n^2)
// Space complexity: O(n^2)
function getAnimalPairs(animals) {
  const pairs = [];
  for (let i = 0 ; i < animals.length ; i++) {
    for (let j = 0 ; j < animals.length ; j++) {
      pairs.push([animals[i], animals[j]]);
    }
  }
  return pairs;
}
// Instructor note: Unlike printAnimalPairs, this function must store all
// pairs resulting in O(n^2) space complexity


// Return an array containing all possible triples of animals
// Time complexity: O(n^3)
// Space complexity: O(n^3)
function getAnimalTriples(animals) {
  const triples = [];
  for (let i = 0 ; i < animals.length ; i++) {
    for (let j = 0 ; j < animals.length ; j++) {
      for (let k = 0 ; k < animals.length ; k++) {
        triples.push([animals[i], animals[j], animals[k]]);
      }
    }
  }
  return triples;
}

// Returns the index of the animal if it is in the array
// Returns -1 if it is not in the array
// Time complexity: O(n)
// Space complexity: O(1)
function findAnimal(animals, target) {
  for (let i = 0 ; i < animals.length ; i++) {
    if (animals[i] === target) return i;
  }
  return -1;
}

```