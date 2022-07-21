function sumPrimes(num) {
  const primes = [];
  let primeCheck = true;
  let temp = -1;
  let sum = 0;

  for (let number = 2; number <= num; number++) {
    primeCheck = true;
    temp = number;
    for (let i = 2; i <= Math.floor(number / 2); i++) {
      if (number % i === 0) {
        primeCheck = false;
        break;
      }
    }
    if (primeCheck === true) {
      primes.push(number);
    }
  }

  sum = primes.reduce(function (sum, prime) {
    return sum + prime;
  }, 0);

  return sum;
}

sumPrimes(10);
