function diagonalDifference(arr) {
  let diagonal1 = 0;
  let diagonal2 = 0;
  const arrLength = arr[0].length
  console.log('arrelengh', arrLength)
  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arrLength; j++) {
      if (i === j) {
        diagonal1 += arr[i][j];
      }
      if ((i + j) === arrLength - 1) {
        diagonal2 += arr[i][j];

      }
    }
  }
  return Math.abs(diagonal1 - diagonal2)
}


function optimizedDiagonalDifference(arr) {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0, j = arr.length - 1; i < arr.length; i++ , j--) {
    sum1 += arr[i][i];
    sum2 += arr[i][j];
  }
  return Math.abs(sum1 - sum2);
}