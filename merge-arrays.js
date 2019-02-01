'use strict';

function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b).filter((num, i, arr) => num !== arr[i+1]);
}

console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]));


function mergeArraysSet(arr1, arr2) {
  return Array.from(new Set([...arr1, ...arr2])).sort((a,b) => a-b);
}

console.log(mergeArraysSet([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]));


var numUniqueEmails = function (emails) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emails) ? true : false
};