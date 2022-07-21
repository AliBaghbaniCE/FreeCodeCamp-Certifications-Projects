function smallestCommons(arr) {
  const range = [...arr];
  const numbers = [];
  let lcm;
  let lcmFlag = false;
  // console.log(range);

  // generate numbers from number range
  if (range[0] < range[1]) {
    for (let num = range[0]; num <= range[1]; num++) {
      numbers.push(num);
    }
  } else {
    for (let num = range[1]; num <= range[0]; num++) {
      numbers.push(num);
    }
  }

  // find lcm one by one
  lcm = numbers[-1 + numbers.length];
  while (lcmFlag === false) {
    lcmFlag = numbers.every(function (num) {
      return lcm % num === 0;
    });
    if (lcmFlag === false) {
      lcm++;
    }
  }

  return lcm;
}

smallestCommons([1, 5]);
