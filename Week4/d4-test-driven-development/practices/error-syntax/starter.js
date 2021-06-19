// 1.
function sum(array) {
  let sum = 0;
  // try {
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
  // } catch (err) {
  //   handleError(err)
  // }
  return sum;
}

function handleError(error) {
  console.log('something happened: ', error.message)
  // console.log(error)
}

let res = sum(null);
console.log(res);

// 2.
function sayName(name) {
  if (!(typeof name === 'string')) {
    throw new TypeError('Invalid name! Must be a string!')
  }
  console.log(name)
}



// try {
//   sayName('Alex')
//   sayName(3)
// } catch (error) {
//   handleError(error)
// }

// 3.
class KristenError extends Error {
  kristen() {
    console.log('I am better than you')
  }
}

// throw new KristenError('Passwords must match')
let myError = new KristenError()
myBoundError = myError.kristen.bind(myError);

// console.log(Error)
// 
try {
 sum("h")
} catch (myBoundError) {
  handleError(myBoundError)
}