function truthCheck(collection, pre) {
  let collectionC = [...collection];

  collectionC = collectionC
    .map(function (object) {
      return Boolean(object[pre]);
    })
    .filter(function (bool) {
      return bool === false;
    });

  if (collectionC[0] === undefined) {
    return true;
  } else {
    return false;
  }
}

truthCheck(
  [
    { name: "Quincy", role: "Founder", isBot: false },
    { name: "Naomi", role: "", isBot: false },
    { name: "Camperbot", role: "Bot", isBot: true }
  ],
  "name"
);
