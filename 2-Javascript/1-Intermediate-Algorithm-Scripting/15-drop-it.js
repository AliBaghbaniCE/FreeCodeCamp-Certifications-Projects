function dropElements(arr, func) {
  let numbers = [...arr];
  let trueIndex = -1;

  for (const [index, number] of Object.entries(numbers)) {
    if (func(number)) {
      trueIndex = index;
      break;
    }
  }

  if (trueIndex === -1) {
    return [];
  } else {
    numbers = numbers.slice(trueIndex);
  }

  return numbers;
}

dropElements([1, 2, 3, 9, 2], function (n) {
  return n > 2;
});
