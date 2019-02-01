'use strict'; 

function diamond(n) {
  let star = '*'
  if(n < 0 || n % 2 === 0) {
    return 'must be odd number to make your star :s';
  }
  for (let i = 1; i < n + 1; i++) {
    if(i % 2 === 0) {
      star += '*';
      continue;
    }
    console.log(star);
    star += '*';
  }
  let star2 = star;
  let temp = n;
  for (let i = 1; i < n + 1; i++) {
    temp = temp - 2
    star2 = star2.slice(0, temp);
    console.log(star2);
    if(star2.length === 1) { break ;}
  }
  return star;
}


                     //      *
diamond(5); // out put      ***
                     //      *

// input diamond(5)
//                  OUTPUT
//                    *
//                   *** 
//                  *****
//                   ***
//                    *