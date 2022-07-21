function destroyer(arr, ...args) {
  const newArr = [...arr];
  const destroyList = [...args];
  const destroyIndexes = [];

  newArr.forEach(function (val1, index1) {
    destroyList.forEach(function (val2) {
      if (val1 === val2) {
        destroyIndexes.push(index1);
      }
    });
  });

  destroyIndexes.forEach(function (val) {
    newArr.splice(val, 1);
    destroyIndexes.forEach(function (val2, index2) {
      destroyIndexes[index2] = val2 - 1;
    });
  });

  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
