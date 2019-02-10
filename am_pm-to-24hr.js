function timeConversion(s) {
  /*
   * Write your code here.
   */
  let strArr = s.split(':'),
    AMorPM = strArr[2].slice(-2);
  if (AMorPM === 'PM') {
    if (Number(strArr[0]) === 12) {
      strArr[0] = 12
    } else {
      strArr[0] = Number(strArr[0]) + 12
    }
  } else if (AMorPM === 'AM') {
    if (Number(strArr[0]) === 12) {
      strArr[0] = `0${Math.abs(Number(strArr[0]) - 12)}`
    } else {
      strArr[0] = `0${Number(strArr[0])}`
    }
  }
  strArr[2] = strArr[2].slice(0, 2);
  return strArr.join(':')
}


// console.log(timeConversion('12:45:54PM'))
// console.log(timeConversion('12:00:00AM'))
// console.log(timeConversion('04:59:59AM'))

// Realised I did a lot of extra things up top so refactored a ...lot
// refactor
function timeConversion2(s) {
  // used to check for if its am or pm
  let AMorPM = s.slice(-2);
  // copy and split string without the am or pm
  let strArr = s.slice(0, -2).split(":");

  if (AMorPM === "AM" && strArr[0] === "12") {
    // catching edge-case of 12AM
    strArr[0] = "00";
  } else if (AMorPM === "PM") {
    // everything with PM can just be mod'd and added with 12 - the max will be 23
    strArr[0] = (strArr[0] % 12) + 12
  }

  return strArr.join(":");
}

console.log(timeConversion2('12:45:54PM'))
console.log(timeConversion2('12:00:00AM'))
console.log(timeConversion2('04:59:59AM'))