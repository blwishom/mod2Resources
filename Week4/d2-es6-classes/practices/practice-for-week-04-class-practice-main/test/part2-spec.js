const chai = require("chai");
const spies = require("chai-spies");
chai.use(spies);
const expect = chai.expect;

const { Student, Teacher } = require("../classPractice");

describe("Student class", () => {
  let student1;

  beforeEach(() => {
    student1 = new Student("billy", "johnson", "software-development", 3.2);
  });
  describe("Student constructor", () => {
    it("should have and set the firstName property", () => {
      expect(student1).to.have.property("firstName");
      expect(student1.firstName).to.eql("billy");
    });
    it("should have and set the lastName property", () => {
      expect(student1).to.have.property("lastName");
      expect(student1.lastName).to.eql("johnson");
    });
    it("should have and set the major property", () => {
      expect(student1).to.have.property("major");
      expect(student1.major).to.eql("software-development");
    });
    it("should have and set the GPA property", () => {
      expect(student1).to.have.property("GPA");
      expect(student1.GPA).to.eql(3.2);
    });
  });
  describe("compareGPA static method", () => {
    it("should return the student with the highest GPA", () => {
      let student2 = new Student("sarah", "smith", "basket-weaving", 3.7);
      expect(Student.compareGPA(student1, student2)).to.eql(
        "sarah smith has the higher GPA."
      );
    });
  });
});

describe("Teacher class", () => {
  let teacher1;
  let teacher2;
  beforeEach(() => {
    teacher1 = new Teacher("susan", "jones", "biology", 5);
    teacher2 = new Teacher("bobby", "roberts", "math", 15);
  });
  describe("Teacher constructor", () => {
    it("should have and set the firstName property", () => {
      expect(teacher1).to.have.property("firstName");
      expect(teacher1.firstName).to.eql("susan");
    });
    it("should have and set the lastName property", () => {
      expect(teacher1).to.have.property("lastName");
      expect(teacher1.lastName).to.eql("jones");
    });
    it("should have and set the subject property", () => {
      expect(teacher1).to.have.property("subject");
      expect(teacher1.subject).to.eql("biology");
    });
    it("should have and set the yearsOfExperience property", () => {
      expect(teacher1).to.have.property("yearsOfExperience");
      expect(teacher1.yearsOfExperience).to.eql(5);
    });
  });
  describe("combinedYearsOfExperience static method", () => {
    it("should return the count of total combined yearsOfExperience of an array of teachers", () => {
      expect(Teacher.combinedYearsOfExperience([teacher1, teacher2])).to.eql(
        20
      );
    });
  });
});