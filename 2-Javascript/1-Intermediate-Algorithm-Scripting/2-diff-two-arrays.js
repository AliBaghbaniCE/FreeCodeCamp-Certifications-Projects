function diffArray(arr1, arr2) {
  const newArr1 = [...arr1];
  const newArr2 = arr2.slice(0, arr2.length);
  const finalArr = [];
  let checkFlag = false;

  for (let i = 0; i <= -1 + newArr1.length; i++) {
    checkFlag = false;
    for (let j = 0; j <= -1 + newArr2.length; j++) {
      if (newArr1[i] === newArr2[j]) {
        checkFlag = true;
      }
    }
    if (checkFlag === false) {
      finalArr.push(newArr1[i]);
    }
  }

  for (let i = 0; i <= -1 + newArr2.length; i++) {
    checkFlag = false;
    for (let j = 0; j <= -1 + newArr1.length; j++) {
      if (newArr2[i] === newArr1[j]) {
        checkFlag = true;
      }
    }
    if (checkFlag === false) {
      finalArr.push(newArr2[i]);
    }
  }

  return finalArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
