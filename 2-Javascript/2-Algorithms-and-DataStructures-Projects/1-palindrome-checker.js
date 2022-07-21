function palindrome(str) {
  const removeRe = /[\W_\s]/gim;
  let strAfter;

  // remove all non-alphanumeric characters (punctuation, spaces and symbols)
  str = str.replace(removeRe, "");
  strAfter = str.replace(removeRe, "");

  // reverse strAfter to check for palindorme
  strAfter = strAfter.split("");
  strAfter = strAfter.reverse();
  strAfter = strAfter.join("");

  // change all cases to lowercases
  str = str.toLowerCase();
  strAfter = strAfter.toLowerCase();

  if (str === strAfter) {
    return true;
  } else {
    return false;
  }
}

palindrome("My age is 0, 0 si ega ym.");
