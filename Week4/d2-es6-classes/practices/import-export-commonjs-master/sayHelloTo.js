const sayMessage = require('./sayMessage')

function sayHelloTo(name) {
  sayMessage(`Hello ${name}!`)
}

sayHelloTo("Woody")

// module.exports = {
//   sayHelloTo
// }
module.exports.sayHelloTo = sayHelloTo;
// module.exports = sayHelloTo;