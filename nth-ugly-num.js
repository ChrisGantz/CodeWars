'use strict';

// Works but is a unefficient solution takes way to long
var nthUglyNumber = function (n) {
  if (n < 0) {
    return 'none';
  }
  let nthNum, count = 1;
  let newArr = [];
  while (newArr.length !== n) {
    if (count % 2 === 0 || count % 3 === 0 || count % 5 === 0 || count === 1) {
      nthNum = count;
      if (newArr.includes(nthNum / 2) || newArr.includes(nthNum / 3) || newArr.includes(nthNum / 5) || nthNum === 1) {
        newArr.push(nthNum);
      }
      // console.log(newArr)
    }
    count++;
  }
  return nthNum;
};
// console.log(nthUglyNumber(500));


// refactored 
var nthUglyNumber2 = function (n) {
  let index2 = 0, index3 = 0, index5 = 0,
    temp2, temp3, temp5, min;
  let uglyArr = [1];
  let count = uglyArr.length;
  while (count !== n) {
    temp2 = uglyArr[index2] * 2;
    temp3 = uglyArr[index3] * 3;
    temp5 = uglyArr[index5] * 5;
    min = Math.min(temp2, temp3, temp5);
    // console.log('min:', min)
    min === temp2 && index2++;
    min === temp3 && index3++;
    min === temp5 && index5++;
    uglyArr[count] = min;
    count++;
  }
  return uglyArr[n-1];
};

console.log(nthUglyNumber2(15));
