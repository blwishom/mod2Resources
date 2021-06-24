/*1. Is Five
Define a function isFive that will return true if a number is equal to 5 and false if it is not.
*/
function isFive(num) {
  // Your code here
  return num === 5
}

/*2. Is Odd
Write a function isOdd that takes in a number as an argument and returns true if the number is odd and returns false otherwise.
*/
function isOdd(number) {
  // Your code here
  if (typeof number !== 'number') {
    throw Error('not a number')
  }
  return number % 2 !== 0;
}

/*3. Array  of the Range
   Write a function myRange(min, max, step) that takes in 3 numbers as
      parameters. The function should ran array of the between and inclusive of
      min and max at step intervals.
*/

function myRange(min, max, step = 1) {
  // Your code here
  const arr = [];
  for (let i = min; i <= max; i += step){
    arr.push(i)
  }
  return arr;
}


module.exports = { isFive, isOdd, myRange };