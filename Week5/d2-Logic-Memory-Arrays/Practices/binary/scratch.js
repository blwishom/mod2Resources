function decToBin(decimal) {
  return decimal.toString(2);
}
console.log(decToBin(255));


// function decToHex(decimal) {
//   return decimal.toString(16);
// }
// console.log(decToHex(24));

function binToASCII(binaryBlob) {
  let binString = "";
  binaryBlob.split(" ").map((bin) => {
    binString += String.fromCharCode(parseInt(bin, 2));
  });
  return binString;
}
console.log(binToASCII("01100001"));