class Employee {
    constructor(name, occupation) {
        this.name = name;
        this.occupation = occupation;
    }
    sayName() {
        console.log(this.name);
    }
    sayOccupation() {
        console.log(this.occupation)
    }
}

const john = new Employee('John Wick', 'Dog Lover');
let sayNameFunc = john.sayName.bind(john)
// let sayNameFunc1 = john.sayName()
// let boundFunc = sayNameFunc1.bind(john)
let sayOccFunc = john.sayOccupation.bind(john)

// console.log(sayNameFunc())
// setTimeout(john.sayName, 2000)
setTimeout(sayNameFunc, 2000)
setTimeout(sayOccFunc, 3000)
// console.dir(globalThis)