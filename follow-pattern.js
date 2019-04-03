'use strict';
// Given a pattern and a string str, find if str follows the same pattern.

// Here follow means a full match, such that there is a 
// bijection between a letter in pattern and a non - empty word in str.

const wordPattern = (pattern, str) => {
  let strArr = str.split(' ');
  const patternLen = pattern.length;
  const strArrLen = strArr.length;
  let bool = true;
  if (patternLen !== strArrLen) {
    return false;
  }
  let trackPattern = {};
  for (let i = 0; i < patternLen; i++) {
    if (trackPattern[pattern[i]]) {
      // console.log(trackPattern);
      trackPattern[pattern[i]] === strArr[i] ? bool = true : bool = false;
    } else {
      if (trackPattern[pattern[i - 1] === strArr[i]]) {
        bool = false;
      } else {
        trackPattern[pattern[i]] = strArr[i];
      }
    }
    if (!bool) break;
  }

  return bool;
};

wordPattern('abba', 'dog dog dog dog'); // ==> false
// wordPattern('abddba', 'dog cat dog dog cat dog'); // ==> false
// wordPattern('abba', 'dog cat cat dog'); // ==> true