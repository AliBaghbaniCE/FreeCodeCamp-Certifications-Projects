function uniteUnique(...arrs) {
  const uniqueSet = new Set();
  let uniqueArr = [];

  arrs.forEach(function (arr) {
    arr.forEach(function (value) {
      uniqueSet.add(value);
    });
  });

  uniqueArr = Array.from(uniqueSet);
  console.log(uniqueArr);

  return uniqueArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
