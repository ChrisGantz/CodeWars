function roundToNext5(n) {
  // ...
  // easy checks to see if value can be returned immediatly
  if (n === 0 || (n < 0 && n > -5) ) { return 0 }
  if (n % 5 === 0) { return n }
  return Math.ceil(n / 5) * 5
}

console.log(roundToNext5(7));