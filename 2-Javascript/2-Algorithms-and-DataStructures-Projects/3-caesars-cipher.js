function rot13(str) {
  const alphArr = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ];
  const alphObj = {};
  const strArr = str.split("");
  const nonAlphRe = /[\s\W_]/;
  let letterIndex = -1;

  alphArr.forEach(function (letter, index) {
    alphObj[letter] = index;
  });

  strArr.forEach(function (letter, index) {
    if (!nonAlphRe.test(letter)) {
      letterIndex = alphObj[letter];
      letterIndex -= 13;
      if (letterIndex < 0) {
        letterIndex += 26;
      }
      strArr[index] = alphArr[letterIndex];
    }
  });

  str = strArr.join("");

  return str;
}

rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
