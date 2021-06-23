class Dog {
  constructor(name, age, breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
  }
  print() {
    console.log(this);
  }

  static printDogs(dogs) {
    return dogs.forEach((dog) => {
      console.log(dog);
    });
  }
}

let newDog = new Dog("Badger", 0.5, "Great Pyrenees");
newDog.print(); //this refers to the newDog object that is an instance of Dog class;

let printDog = newDog.print.bind(newDog);
printDog();

console.log(this);
