function whatIsInAName(collection, source) {
  const arr = [...collection];
  const search = { ...source };
  const searchRes = [];
  const finalArr = [];

  for (let i = 1; i <= arr.length; i++) {
    searchRes.push([]);
  }

  for (let i = 0, j = 0; i <= -1 + arr.length; i++) {
    for (const key1 in arr[i]) {
      for (const key2 in search) {
        if (key1 === key2) {
          if (arr[i][key1] === search[key2]) {
            searchRes[i].push(1);
          }
        }
      }
    }
  }

  searchRes.forEach(function (res, index) {
    if (res.length === Object.keys(search).length) {
      finalArr.push(arr[index]);
    }
  });

  return finalArr;
}

whatIsInAName(
  [
    { "apple": 1, "bat": 2 },
    { "bat": 2 },
    { "apple": 1, "bat": 2, "cookie": 2 }
  ],
  { "apple": 1, "bat": 2 }
);
