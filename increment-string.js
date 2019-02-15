'use strict';

function incrementString(strng) {
  // return incrementedString
  // console.log(strng);
  let strngSplitNum = strng.split(/(\d+)/g);
  if (!strngSplitNum[1]) {
    strngSplitNum[1] = 1;
  } 
  else {
    let prevValLen = strngSplitNum[1].length;
    // console.log('prevValLen:', prevValLen)
    let newVal = (Number(strngSplitNum[1]) + 1).toString();
    let newValLen = newVal.length;
    // console.log('newValLen:', newValLen);
    if (prevValLen >= newValLen) {
      strngSplitNum[1] = '0'.repeat(prevValLen - newValLen) + newVal;
    } else {
      strngSplitNum[1] = newVal;
    }
  }
  // console.log(strngSplitNum);
  // console.log(strngSplitNum.join(''));
  return strngSplitNum.join('');
}

console.log(incrementString('foobar000'));
console.log(incrementString('foobar00999'));
console.log(incrementString('foobar001'));
console.log(incrementString('foobar99'));
console.log(incrementString('foobar099'));
console.log(incrementString('foobar1'));