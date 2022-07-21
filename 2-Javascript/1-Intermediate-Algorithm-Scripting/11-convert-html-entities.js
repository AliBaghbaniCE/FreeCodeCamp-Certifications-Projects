function convertHTML(str) {
  const entities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  let strArr = [];

  strArr = str.split("");

  strArr.forEach(function (letter, index) {
    for (const entity in entities) {
      if (letter === entity) {
        strArr[index] = entities[letter];
      }
    }
  });

  str = strArr.join("");

  return str;
}

convertHTML("Dolce & Gabbana");
