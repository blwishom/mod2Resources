/*
Context: who the code belongs to
-this: refers to a specific block of code's owner
*/

class Dog {
    constructor(name, age, breed) {
        this.name = name;
        this.age = age;
        this.breed = breed;
        
    }
    print() {
        console.log(this)
    }

    static printDogs(dogs) {
        return dogs.forEach(dog => {
            console.log(dog)
        })
    }
    
}

let newDog = new Dog('Badger', .5, 'Great Pyrenees')
newDog.print() //this refers to the newDog object that is an instance of Dog class;

let printDog = newDog.print();
printDog()

console.log(this)

