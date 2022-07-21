function spinalCase(str) {
  str = str.replace(/([A-Z+])/g, " $1");
  str = str.trim();

  str = str.replace(/\s+/gi, " ");

  let strArr = str.split(/[\s+]|[-_]/gi);

  strArr = strArr.filter(function (value) {
    return value !== "";
  });

  str = strArr.join("-");

  str = str.toLowerCase();

  return str;
}

spinalCase("The_Andy_Griffith_Show");
