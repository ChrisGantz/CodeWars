'use strict';

function reverse(str) {
  if (str.length === 1) {
    return str;
  }
  let end = str.slice(-1);
  return end + reverse(str.slice(0, str.length - 1));
}

console.log(reverse('skrow ti kool'));