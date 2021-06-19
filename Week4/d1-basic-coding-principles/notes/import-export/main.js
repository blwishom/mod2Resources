const { adding } = require('./adding')
const taco  = require('./subtraction').taco
const { multiplication } = require('../multiplication')


console.log(adding(5, 7)) //=> 12
console.log(taco(8, 3)) //=> 5
console.log(taco(2, 7)) // => 5
console.log(multiplication(2,3))