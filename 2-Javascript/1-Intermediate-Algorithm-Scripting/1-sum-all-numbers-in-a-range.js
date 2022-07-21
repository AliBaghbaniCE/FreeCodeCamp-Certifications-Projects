function sumAll(arr) {
  let newArr = arr.slice(0, arr.length);
  let sum = 0;

  if (newArr[0] > newArr[1]) {
    newArr = [newArr[1], newArr[0]];
  }

  for (let i = newArr[0]; i <= newArr[1]; i++) {
    sum += i;
  }

  return sum;
}

sumAll([1, 4]);
