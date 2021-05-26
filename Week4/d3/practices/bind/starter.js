class Employee {
    constructor(name, occupation) {
        this.name = name;
        this.occupation = occupation;
    }
    sayName() {
        console.log(this.name);
    }
    sayOccupation() {
        console.log(this.occupation);
    }


    
}

let john = new Employee('John Wick', 'Dog Lover')

// let sayNameBound = john.sayName.bind(john)
// let sayOccupationBound = john.sayOccupation.bind(john)

let sayNameBound = john.sayName
let bindFunc = sayNameBound.bind(john)
bindFunc()

let sayOccupationBound = john.sayOccupation()
// setTimeout(sayNameBound, 2000)
// setTimeout(sayOccupationBound, 3000)
// sayNameBound()
// sayOccupationBound()