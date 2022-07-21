function translatePigLatin(str) {
  let strArr = str.split("");
  let result = "";
  let letterIndex = -1;
  let checkFlag = false;
  let spliceArr = [];

  const vowels = ["a", "e", "i", "o", "u"];

  // if first letter is a vowel
  for (const vowel of vowels) {
    if (vowel === strArr[0]) {
      result = strArr.join("");
      result += "way";
      break;
    }
  }
  console.log(result);

  // if first letter is a consonant
  if (result === "") {
    for (const [index, letter] of Object.entries(strArr)) {
      for (const vowel of vowels) {
        if (letter === vowel) {
          checkFlag = true;
          letterIndex = index;
          break;
        }
      }
      if (checkFlag === true) {
        break;
      }
    }

    if (letterIndex === -1) {
      result = strArr.join("");
      result += "ay";
    } else {
      spliceArr = strArr.splice(0, letterIndex);
      strArr = strArr.concat(spliceArr);
      result = strArr.join("");
      result += "ay";
    }
  }

  return result;
}

translatePigLatin("eight");
