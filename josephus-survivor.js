'use strict';

function josephusSurvivor(n, k) {
  //your code here
  let aliveArr = [];
  let deadArr = [];
  for (let i = 1; i <= n; i++) {
    aliveArr.push(i);
  }
  let index = 0;
  let count = 1;
  while(aliveArr.length !== 0) {
    if (index === aliveArr.length) {
      index = 0;
    }
    if((count) % k === 0) {
      deadArr.push(...aliveArr.splice(index, 1));
      index -= 1;
    }
    index++;
    count++;
  }
  return deadArr.pop();
}

josephusSurvivor(7,3);
console.log('josephusSurvivor:', josephusSurvivor(1,300));