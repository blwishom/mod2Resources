class Person {
  constructor(first, last, age) {
    this.first = first;
    this.last = last;
    this.age = age;
  }
  introduce() {
    console.log(
      `Hi, I'm ${this.first} ${this.last}, and I'm ${this.age} years old.`
    );
  }
  static introducePeople(people) {
    if (!(people instanceof Array)) {
      throw new Error("this method only accepts arrays");
    }
    people.forEach((person) => {
      if (!(person instanceof Person)) {
        throw new Error("All items in array must be a Person instance");
      }
      person.introduce();
    });
  }
}

class Student extends Person {
  constructor(first, last, age, major, GPA) {
    super(first, last, age);
    this.major = major;
    this.GPA = GPA;
  }
  static compareGPA(stu1, stu2) {
    if (stu1.GPA > stu2.GPA) {
      console.log(`${stu1.first} ${stu1.last} has the higher GPA`);
    } else if (stu2.GPA > stu1.GPA) {
      console.log(`${stu2.first} ${stu2.last} has the higher GPA`);
    } else {
      console.log("Both students have the same GPA");
    }
  }
}

let person1 = new Person("Kristen", "Chauncey", 38);
let person2 = new Person("John", "Doe", 32);
person1.introduce();
Person.introducePeople([person1, person2]);

let student1 = new Student("Sarah", "Smith", 21, "basket weaving", 2.3);
let student2 = new Student("Billy", "Bob", 32, "coffee", 4.0);

student1.introduce();
Student.compareGPA(student1, student2);
Student.introducePeople([student1, student2]);
