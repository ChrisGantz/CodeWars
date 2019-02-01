function digital_root(n) {
  // ...
  if (n < 10) {
    return n
  }
  const newSumNum = Array.from(String(n), Number).reduce((sum, currValue) => {
    return sum + currValue;
  }, 0);
  return digital_root(newSumNum)
}

console.log(digital_root(5634));