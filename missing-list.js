'use strict';

function find_missing(arr1, arr2) {
  let set2 = new Set(arr2);
  let missing_item = [];
  arr1.forEach(num => {
    if(set2.has(num) === false) {
      missing_item.push(num);
    }
  });
  return missing_item;
}

console.log(find_missing([4, 12, 9, 5, 6], [4, 9, 12, 6]));
