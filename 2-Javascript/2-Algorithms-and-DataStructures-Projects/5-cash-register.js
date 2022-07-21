function checkCashRegister(price, cash, cid) {
  let currUnit = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ];
  let cidC = [...cid];
  let change;
  let unitFactor;
  let payFactor;
  let changeArray = [];
  let status = "";
  let finalObject = {};

  if (cash < price) {
    return "Cash must be equal or greater than price.";
  } else if (cash === price) {
    return "There is no change. have a nice day.";
  } else {
    change = cash - price;

    // we must pay the change from high amount to low amount
    cidC = cidC.reverse();
    currUnit = currUnit.reverse();

    for (const [index, cash] of Object.entries(cidC)) {
      if (cash !== 0) {
        unitFactor = Math.floor(change / currUnit[index][1]);
        if (unitFactor >= 1) {
          payFactor = Math.floor(cash[1] / currUnit[index][1]);
          if (payFactor <= unitFactor) {
            change -= currUnit[index][1] * payFactor;
            changeArray.push([
              currUnit[index][0],
              currUnit[index][1] * payFactor
            ]);
            if (payFactor === unitFactor) {
              status = "CLOSED";
            }
          } else {
            change -= currUnit[index][1] * unitFactor;
            changeArray.push([
              currUnit[index][0],
              currUnit[index][1] * unitFactor
            ]);
          }
          change = change.toFixed(2);
        }
      }
    }

    if (change > 0) {
      status = "INSUFFICIENT_FUNDS";
      changeArray = [];
    } else if (status === "" || status !== "CLOSED") {
      status = "OPEN";
    }

    if (status === "CLOSED") {
      changeArray = [...cidC];
      changeArray = changeArray.reverse();
    }

    finalObject.status = status;
    finalObject.change = changeArray;
    return finalObject;
  }
}

checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]);
