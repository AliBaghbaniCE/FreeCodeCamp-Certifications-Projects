function fearNotLetter(str) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  const strFirstLetterIndex = 0;
  let alphabetFirstLetterIndex = -1;
  let result;

  for (const [index, letter] of Object.entries(alphabet)) {
    if (letter === str[strFirstLetterIndex]) {
      alphabetFirstLetterIndex = index;
    }
  }

  for (const strLetter of str) {
    if (strLetter !== alphabet[alphabetFirstLetterIndex]) {
      result = alphabet[alphabetFirstLetterIndex];
      break;
    }
    alphabetFirstLetterIndex++;
  }

  return result;
}

fearNotLetter("stvwx");
