function isInteresting(number, awesomePhrases) {

  const isPalindrome = (num, arr) => {
    let orig = [...arr];
    let reversed = Number(orig.reverse().join(''));
    return reversed === num;
  }

  const sequentialInc = (arr) => {
    let inc = true;
    let secondLast = arr.length - 2;

    arr.forEach((digit, i) => {
      if(i <= secondLast) {
        inc = inc && ((digit === 9 && arr[i + 1] === 0) || (arr[i + 1] - digit === 1));
      }
    });

    return inc;
  }

  const sequentialDec = (arr) => {
    let dec = true;
    let secondLast = arr.length - 2;

    arr.forEach((digit, i) => {
      if(i <= secondLast) {
        dec = dec && ((digit === 1 && arr[i + 1] === 0) || (digit - arr[i + 1] === 1));
      }
    });

    return dec;
  }

  const interesting = (num, arr) => {
    let valid;

    // an interesting number is > 99
    if (num <= 99) {
      return false;
    }

    let numStr = String(num);
    let numArr = [...numStr].map(digit => Number(digit));

    valid = (
      (arr.some(elem => elem === num)) || // in awesome phrases
      (Number(numStr.slice(1)) === 0) || // followed by zeroes
      (numArr.every(digit => digit === numArr[0])) || // repeating digit
      (sequentialInc(numArr)) || // sequential incrementing
      (sequentialDec(numArr)) || // sequential decrementing
      (isPalindrome(num, numArr)) // palindrome
      );

    return valid;
  }

  if(interesting(number, awesomePhrases)) {
    return 2;
  } else if (interesting((number + 1), awesomePhrases) || interesting((number + 2), awesomePhrases)) {
    return 1;
  }
  return 0;
}