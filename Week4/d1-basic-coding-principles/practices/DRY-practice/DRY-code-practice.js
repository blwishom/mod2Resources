function findBigNum(num1, num2) {
  let bigNum = num1 > num2 ? num1 : num2;
  return bigNum;
}

function multiplyBigNumByTwo(num1, num2) {
  let bigNum = findBigNum(num1, num2);
  return bigNum * 2;
}

function divideBigNumByThree(num1, num2) {
  let bigNum = findBigNum(num1, num2);
  return bigNum / 3;
}

function eatMostTacos(sum1, sum2) {
  let bigNum = findBigNum(sum1, sum2);
  return `I at ${bigNum} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  let smallDog = findBigNum(weight1, weight2) === weight1 ? weight2 : weight1;
  return `I adopted a dog that sadly weights ${smallDog} pounds.`;
}
