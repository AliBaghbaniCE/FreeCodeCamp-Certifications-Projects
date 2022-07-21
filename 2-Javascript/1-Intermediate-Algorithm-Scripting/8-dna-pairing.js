function pairElement(str) {
  let strArr;
  let finalArr = [];
  const strands = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };

  strArr = str.split("");

  finalArr = strArr.map(function (value) {
    return [value, strands[value]];
  });

  return finalArr;
}

pairElement("GCG");
