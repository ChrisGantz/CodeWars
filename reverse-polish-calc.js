'use strict';
/*
Your job is to create a calculator which evaluates expressions in Reverse Polish notation.

For example expression 5 1 2 + 4 * + 3 - (which is equivalent to 5 + ((1 + 2) * 4) - 3 in normal notation)
should evaluate to 14.

For your convenience, the input is formatted such that a space is provided between every token.

Empty expression should evaluate to 0.

Valid operations are +, -, *, /.

You may assume that there won't be exceptional situations (like stack underflow or division by zero).
*/
function calc(expr) {
  // TODO: Your awesome code here
  let splitStr = expr.split(' ');
  console.log(splitStr);
  // check to see if only one value and return if there is
  if (!splitStr[0]) {
    return 0;
  } else if (splitStr.length === 1) {
    return parseFloat(expr);
  }
  for (let i = 0; i < splitStr.length; i++) {
    // console.log(splitStr[i]);
    if (splitStr[i] === '+') {
      // grab previous values evaluate and replace
      splitStr.splice(i - 2, 3, (parseInt(splitStr[i - 2]) + parseInt(splitStr[i - 1])));
      i = 0;
    } else if (splitStr[i] === '-') {
      splitStr.splice(i - 2, 3, (parseInt(splitStr[i - 2]) - parseInt(splitStr[i - 1])));
      i = 0;
    } else if (splitStr[i] === '*') {
      splitStr.splice(i - 2, 3, (parseInt(splitStr[i - 2]) * parseInt(splitStr[i - 1])));
      i = 0;
    } else if (splitStr[i] === '/') {
      splitStr.splice(i - 2, 3, (parseInt(splitStr[i - 2]) / parseInt(splitStr[i - 1])));
      i = 0;
    }
  }
  console.log(splitStr);
  return parseFloat(splitStr[0]);
}

calc('10 5 -');
calc('1 3 -');
calc('1 3 +');
// calc('5 1 2 + 4 * + 3 -'); // => 5 1 2 + 4 * + 3 -
                           // => 5 3 4 * + 3 -
                           // => 5 12 + 3 -
                           // => 17 3 -
                           // => 14
// console.log(calc('1 2 + 4 *'));
// console.log(calc('3.5'));