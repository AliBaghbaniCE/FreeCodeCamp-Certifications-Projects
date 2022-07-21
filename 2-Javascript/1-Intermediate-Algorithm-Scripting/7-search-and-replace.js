function myReplace(str, before, after) {
  // Test if the first letter is lowercase or uppercase
  const testLetterRegex = new RegExp(`${before}`, "g");
  const testLetterIndex = str.search(testLetterRegex);
  let result = "";

  // Change the case of the text that must be replaced
  if (str[testLetterIndex] === str[testLetterIndex].toLowerCase()) {
    after = after.split("");
    after[0] = after[0].toLowerCase();
    after = after.join("");
  } else if (str[testLetterIndex] === str[testLetterIndex].toUpperCase()) {
    after = after.split("");
    after[0] = after[0].toUpperCase();
    after = after.join("");
  }

  // Change all after strings with before strings
  result = str.replace(testLetterRegex, after);

  return result;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
