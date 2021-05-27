// chai is an assertion library
const chai = require("chai");
const spies = require("chai-spies");

// assertion style included with chai
const expect = chai.expect;

// tell chai to use spies library
chai.use(spies);

// import the object we're testing
const Dog = require('../problems/dog');



describe("Dog class", () => {
  let badger;

  beforeEach("set up dog instance", () => {
    badger = new Dog("Badger", .25, ["rollover"]);
  });

  describe("Dog.prototype.constructor", () => {
    it("should have and set the name property", () => {
      // YOUR CODE HERE
      expect(badger.name).to.equal('Badger')
      expect(badger).to.have.property('name')
    });

    it("should have and set the age property", () => {
      // YOUR CODE HERE
      expect(badger.age).to.equal(.25)
      expect(badger).to.have.property('age')

    });

    it("should set the tricks property", () => {
      // YOUR CODE HERE
      expect(badger.tricks).to.eql(['rollover'])
      expect(badger).to.have.property('tricks')

    });
  });

  describe("Dog.prototype.haveBirthday", () => {
    it("should increment the dogs age by 1", () => {
      // YOUR CODE HERE
      //arrange
      let expected = 1.25;
      //act
      badger.haveBirthday();
      let actual = badger.age;
      //assert
      expect(actual).to.equal(expected)

    });

    it("should return the new age", () => {
      // YOUR CODE HERE
      let expected = 1.25
      let actual = badger.haveBirthday();
      expect(actual).to.eql(expected)

    });
  });

  describe("Dog.prototype.numTricks", () => {
    it("should return the number of tricks a dog knows", () => {
      // YOUR CODE HERE
      expect.fail("replace with your code");

    });
  });

  describe("Dog.prototype.learnTrick", () => {
    it("should add new trick to dogs tricks array", () => {
      // YOUR CODE HERE
      expect.fail("replace with your code");

    });

    it("should return the new number of tricks a dog knows", () => {
      // YOUR CODE HERE
      expect.fail("replace with your code");

    });

    it("should call the numTricks() method", () => {
      // YOUR CODE HERE
      expect.fail("replace with your code");

    });
  });
});