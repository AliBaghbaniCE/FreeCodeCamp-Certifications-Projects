function sumFibs(num) {
  let fib = [1, 1];
  let temp;
  let oddFib = [];
  let result = 0;

  for (let i = 0; ; i++) {
    temp = fib[i] + fib[i + 1];
    if (temp > num) {
      break;
    }
    fib.push(temp);
  }

  fib.forEach(function (value) {
    if (value % 2 !== 0) {
      oddFib.push(value);
    }
  });

  oddFib.forEach(function (value) {
    result += value;
  });

  return result;
}

sumFibs(1);
