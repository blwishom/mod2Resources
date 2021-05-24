Common JS Modules:
```js
// animal.js
class Dog {}
class Cat {}
module.exports = { Cat, Dog }
// or
// module.exports = { Cat: Cat, Dog: Dog }
// or
// module.exports.Cat = Cat;
// module.exports.Dog = Dog;


// shelter.js
class Shelter {}
module.exports = Shelter



// index.js
const { Cat, Dog } = require('./animal');
const Shelter = require('./shelter')

```

