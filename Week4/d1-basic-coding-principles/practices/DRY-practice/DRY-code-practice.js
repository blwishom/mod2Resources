//!!START SILENT
function findBigNum(num1, num2) {
  let bigNum = num1 > num2 ? num1 : num2;

  return bigNum;
}
//!!END

function multiplyBigNumByTwo(num1, num2) {
  //!!START SILENT
  let bigNum = findBigNum(num1, num2);
  return bigNum * 2;
  //!!END
  //!!ADD
let bigNum;
if (num1 > num2) {
  bigNum = num1;
  return bigNum * 2;
} else {
  bigNum = num2;
  return bigNum * 2;
}
  //!!END_ADD
}

function divideBigNumByThree(num1, num2) {
  //!!START SILENT
  let bigNum = findBigNum(num1, num2);
  return bigNum / 3;
  //!!END
  //!!ADD
  let bigNum;
  if (num1 > num2) {
    bigNum = num1;
    return bigNum / 3;
  } else {
    bigNum = num2;
    return bigNum / 3;
  }
  //!!END_ADD
}

function eatMostTacos(sum1, sum2) {
  //!!START SILENT
  let bigNum = findBigNum(sum1, sum2);
  return `I ate ${bigNum} tacos.`;
  //!!END
  //!!ADD
  let bigNum;
  if (sum1 > sum2) {
    bigNum = sum1;
    return `I ate ${bigNum} tacos.`;
  } else {
    bigNum = sum2;
    return `I ate ${bigNum} tacos.`;
  }
  //!!END_ADD
}

function adoptSmallerDog(weight1, weight2) {
  //!!START SILENT
  let smallDog = findBigNum(weight1, weight2) == weight1 ? weight2 : weight1;
  return `I adopted a dog that weighs ${smallDog} pounds.`;
  //!!END
  //!!ADD
  let smallDog;
  if (weight1 < weight2) {
    smallDog = weight1;
    return `I adopted a dog that weighs ${smallDog} pounds.`;
  } else {
    smallDog = weight2;
    return `I adopted a dog that weighs ${smallDog} pounds.`;
  }
  //!!END_ADD
}
