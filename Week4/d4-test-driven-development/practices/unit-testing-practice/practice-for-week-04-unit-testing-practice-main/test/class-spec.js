const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");
describe("Word", function () {
  
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      // expect.fail("replace with your code");
      const newWord = new Word('computer')
      expect(newWord).to.have.property('word')
    });
    it('should set the "word" property when a new word is created', function () {
      // expect.fail("replace with your code");
      const newWord = new Word('banana')
      expect(newWord.word).to.equal('banana')
    });
  });
  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      // expect.fail("replace with your code");
      const newWord = new Word('dog')
      const result = newWord.removeVowels();
      expect(result).to.equal('dg')
    });
  });
  describe("removeConsonants function", function () {});
  it("should return the word with the consonants removed", function () {
    // expect.fail("replace with your code");
    const newWord = new Word('racecar')
    const result = newWord.removeConsonants()
    expect(result).to.equal('aea')
  });
  describe("pigLatin function", function () {});
  it("should return the word converted to pig latin", function () {
    // expect.fail("replace with your code");
    const newWord = new Word('kristen')
    const result = newWord.pigLatin()
    expect(result).to.equal('istenkray')
  });
});