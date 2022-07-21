function binaryAgent(str) {
  // split string into array
  let strArr = str.split(" ");

  // convert binary numbers to decimal numbers
  strArr = strArr.map(function (binary) {
    return Number.parseInt(binary, 2);
  });

  // convert decimal numbers to characters
  strArr = strArr.map(function (decimal) {
    return String.fromCharCode(decimal);
  });

  // join characters to make the sentence
  strArr = strArr.join("");

  return strArr;
}

binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);
