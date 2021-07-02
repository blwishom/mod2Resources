function binaryToString(binaryBlob) {
  let binaryChars = [];
  let returnLetters = [];
  for (let i = 0 ; i < binaryBlob.length ; i++) {

    binaryChars.push(binaryBlob[i]);

    if (binaryChars.length === 8) {
      let charCode = parseInt(binaryChars.join(''), 2);
      let asciiValue = String.fromCharCode(charCode);
      returnLetters.push(asciiValue);

      binaryChars = [];
    }
  }

  return returnLetters.join('');
}

binaryToString('010000010100001001000011');  // 'ABC'


module.exports = binaryToString;