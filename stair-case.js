function staircase(n) {
  let hash = '';
  let space = '\xa0'
  let count = n - 1;
  for (let i = 0; i < n; i++) {
    hash += '#'
    console.log(`${space.repeat(count)}${hash}`)
    count--;
  }

}