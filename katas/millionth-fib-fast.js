function fib(n) {

  const _fib = (n) => {
    let a, b, c, d;
    n = BigInt(n);

    if (n === 0n) {
      return [0n, 1n];
    }
  
    [a, b] = _fib(n / 2n);
    c = a * (b * 2n - a);
    d = (a * a) + (b * b);

    if (n % 2n === 0n) {
      return [c, d];
    }
    return [d, c + d];
  }

  if (n < 0 && Math.abs(n) % 2 === 0) {
    return -_fib(Math.abs(n))[0];
  }
  return _fib(n)[0];
}