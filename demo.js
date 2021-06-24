class Thing1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`Hi I'm ${this.name} and I'm ${this.age}.`)
    }
}

class Thing2 extends Thing1{
    constructor(name, age) {
        super(name, age)
    }
    introduce2() {
        super.introduce()
    }
}