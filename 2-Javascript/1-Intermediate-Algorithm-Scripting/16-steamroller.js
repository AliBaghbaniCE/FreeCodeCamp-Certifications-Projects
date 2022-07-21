function steamrollArray(arr) {
  const items = [...arr];
  const finalArr = [];

  items.forEach(function (item) {
    if (Array.isArray(item) === false) {
      finalArr.push(item);
    } else {
      finalArr.push(...steamrollArray(item));
    }
  });

  return finalArr;
}

steamrollArray([1, [2], [3, [[4]]]]);
