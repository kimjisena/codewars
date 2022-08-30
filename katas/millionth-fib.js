function fib (n) {
  let neg = n < 0;
  let nMinus2 = 0n;
  let nMinus1 = 1n;

  n = BigInt(n);
  let nth = (n === -1n || n === 1n) ? 1n : n === 0n ? n : null;

  if (neg) {
    let ith = -2n;

    while (ith >= n) {
      nth = nMinus2 - nMinus1;
      nMinus2 = nMinus1;
      nMinus1 = nth;
      ith--;
    }
  } else {
    let ith = 2n;

    while (ith <= n) {
      nth = nMinus2 + nMinus1;
      nMinus2 = nMinus1;
      nMinus1 = nth;
      ith++;
    }
  }

  return nth;
}