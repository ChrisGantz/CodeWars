function sockMerchant(n, ar) {
  let pairSet = new Set([]);
  let count = 0;
  let totalPairs = 0;
  for (let i = 0; i < n; i++) {
    // Check to see if item is in set
    pairSet.has(ar[i]) ? count += 1 : pairSet.add(ar[i]);
    // if there has been to matching items add to total pairs
    // remove item from set
    // reset count to 0 for the next iteration
    if(count === 1) {
      totalPairs += 1;
      pairSet.delete(ar[i]);
      count = 0;
    }
  }
  return totalPairs;
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])
sockMerchant(7, [1,2,1,2,1,3,2])