function orbitalPeriod(arr) {
  const arrC = [...arr];
  let result;
  const GM = 398600.4418;
  const EARTH_RADIUS = 6367.4447;

  result = arrC.map(function (object) {
    return {
      name: object.name,
      orbitalPeriod: Math.round(
        2 * Math.PI * Math.sqrt(Math.pow(EARTH_RADIUS + object.avgAlt, 3) / GM)
      )
    };
  });

  return result;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
