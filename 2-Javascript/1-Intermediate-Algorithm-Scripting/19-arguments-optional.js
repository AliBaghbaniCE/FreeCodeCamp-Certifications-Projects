function addTogether(...args) {
  const argsC = [...args];

  if (argsC.length === 1) {
    if (Number.isInteger(argsC[0]) === true) {
      return function (num) {
        if (Number.isInteger(num) === true) {
          return argsC[0] + num;
        } else {
          return undefined;
        }
      };
    } else {
      return undefined;
    }
  } else {
    if (
      Number.isInteger(argsC[0]) === true &&
      Number.isInteger(argsC[1]) === true
    ) {
      return argsC[0] + argsC[1];
    } else {
      return undefined;
    }
  }
}

addTogether(2)([3]);
