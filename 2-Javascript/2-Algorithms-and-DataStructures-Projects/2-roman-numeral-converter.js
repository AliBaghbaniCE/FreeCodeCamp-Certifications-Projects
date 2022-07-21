/* Roman Numeral Converter from 1 to 3999 */

// Main Function
function convertToRoman(num) {
  // an array for storing digits of number
  const digits = [];
  // function arrays which operate on each number digit
  const funcs = [first, second, third, fourth];
  // an array to store converted numbers to roman numerals
  let romanArr = [];
  // final answer string
  let answerStr = "";

  // a loop to store each digit in array
  while (num !== 0) {
    digits.push(num % 10);
    num = Math.floor(num / 10);
  }

  // calculate roman number for each digit
  romanArr = digits.map(function (number, index) {
    return funcs[index](number);
  });

  // reverse the roman array to make the digit order correct
  romanArr = romanArr.reverse();
  // make the final string from array
  answerStr = romanArr.join("");

  return answerStr;
}

function first(firstNum) {
  const firstTable = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX"
  };

  const func1 = function (num1, rep1) {
    return num1.repeat(rep1);
  };
  const func2 = function (num2) {
    return firstTable[5] + func1(firstTable[1], num2 - 5);
  };

  for (let number in firstTable) {
    if (Number.parseInt(number) === firstNum) {
      return firstTable[number];
    }
  }

  if (firstNum > 1 && firstNum < 4) {
    return func1(firstTable[1], firstNum);
  } else if (firstNum > 5 && firstNum < 9) {
    return func2(firstNum);
  }
}

function second(secondNum) {
  secondNum = secondNum * 10;
  const secondTable = {
    10: "X",
    40: "XL",
    50: "L",
    90: "XC"
  };

  for (let number in secondTable) {
    if (Number.parseInt(number) === secondNum) {
      return secondTable[number];
    }
  }

  if (secondNum > 19 && secondNum < 30) {
    return "XX";
  } else if (secondNum > 29 && secondNum < 40) {
    return "XXX";
  } else if (secondNum > 39 && secondNum < 50) {
    return "XL";
  } else if (secondNum > 49 && secondNum < 60) {
    return "L";
  } else if (secondNum > 59 && secondNum < 70) {
    return "LX";
  } else if (secondNum > 69 && secondNum < 80) {
    return "LXX";
  } else if (secondNum > 79 && secondNum < 90) {
    return "LXXX";
  }
}

function third(thirdNum) {
  thirdNum = thirdNum * 100;
  const thirdTable = {
    100: "C",
    400: "CD",
    500: "D",
    900: "CM"
  };

  for (let number in thirdTable) {
    if (Number.parseInt(number) === thirdNum) {
      return thirdTable[number];
    }
  }

  if (thirdNum > 199 && thirdNum < 300) {
    return "CC";
  } else if (thirdNum > 299 && thirdNum < 400) {
    return "CCC";
  } else if (thirdNum > 399 && thirdNum < 500) {
    return "CD";
  } else if (thirdNum > 499 && thirdNum < 600) {
    return "D";
  } else if (thirdNum > 599 && thirdNum < 700) {
    return "DC";
  } else if (thirdNum > 699 && thirdNum < 800) {
    return "DCC";
  } else if (thirdNum > 799 && thirdNum < 900) {
    return "DCCC";
  }
}

function fourth(fourthNum) {
  fourthNum = fourthNum * 1000;

  if (fourthNum === 1000) {
    return "M";
  } else if (fourthNum === 2000) {
    return "MM";
  } else if (fourthNum === 3000) {
    return "MMM";
  }
}

convertToRoman(3999);
