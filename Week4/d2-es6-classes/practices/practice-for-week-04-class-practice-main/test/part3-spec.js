const chai = require("chai");
const expect = chai.expect;

const spies = require("chai-spies");
chai.use(spies);
const expect = chai.expect;

const { Student, Teacher } = require("../classPractice");

describe("Student class", () => {
  let student1;
  beforeEach(() => {
    student1 = new Student("billy", "johnson", "software-development", 3.2);
  });
  describe("Student instance method introduce", () => {
      it("should call the unique introduce method for Student", () => {
        expect(student1.introduce()).to.eql('Hello. I am billy johnson, and I study software-development.')
    });
  });
  
});

describe("Teacher class", () => {
  let teacher1;
  beforeEach(() => {
    teacher1 = new Teacher("susan", "jones", "biology", 5);
  });
  describe("Teacher instance method introduce", () => {
      it("should call the unique introduce method for Student", () => {
        expect(teacher1.introduce()).to.eql('Hello. I am susan jones and I have been teaching biology for 5 years.')
    });
  });
  
});
