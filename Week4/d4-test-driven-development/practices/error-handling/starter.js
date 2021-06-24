// 1.
function sum(array) {
  let sum = 0;
  try {
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
  } catch (err) {
    handleError(err);
  }
  return sum;
}

function handleError(error) {
  console.log('oops...', error.message)
}

let res = sum(null);
console.log(res);

// 2.
function sayName(name) {
  if (!(typeof name === 'string')) {
    throw new TypeError('Name must be a string')
  }
  console.log(name)
}
// sayName('kristen')
sayName(5)
// try {
//   // sayName(2)
//   sayName('kristen')
// } catch (error) {
//   console.log('Oops, you messed up...', error.message)
// }

// 3.
class ValidationError extends Error{

}

// throw new ValidationError('You are not valid')