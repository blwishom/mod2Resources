// chai is an assertion library
const chai = require("chai");
const spies = require("chai-spies");

// assertion style included with chai
const expect = chai.expect;

// tell chai to use spies library
chai.use(spies);

// import the object we're testing
const Dog = require("../problems/dog");

describe("Dog class", () => {
  let badger;

  beforeEach("set up dog instance", () => {
    badger = new Dog("Badger", 0.25, ["rollover"]);
  });

  describe("Dog.prototype.constructor", () => {
    it("should have and set the name property", () => {
      // YOUR CODE HERE
      expect.fail("enter your code here");
    });

    it("should have and set the age property", () => {
      // YOUR CODE HERE
      expect.fail("enter your code here");
    });

    it("should set the tricks property", () => {
      // YOUR CODE HERE
      expect.fail("enter your code here");
    });
  });

  describe("Dog.prototype.haveBirthday", () => {
    it("should increment the dogs age by 1", () => {
      // YOUR CODE HERE
      expect.fail("enter your code here");
    });

    it("should return the new age", () => {
      // YOUR CODE HERE
      expect.fail("enter your code here");
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
