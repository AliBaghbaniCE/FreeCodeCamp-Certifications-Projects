const Person = function (firstAndLast) {
  const firstAndLastArr = firstAndLast.split(" ");
  let firstName = firstAndLastArr[0];
  let lastName = firstAndLastArr[1];

  this.getFirstName = function () {
    return firstName;
  };
  this.getLastName = function () {
    return lastName;
  };
  this.getFullName = function () {
    return firstName + " " + lastName;
  };

  this.setFirstName = function (first) {
    firstName = first;
    return;
  };
  this.setLastName = function (last) {
    lastName = last;
    return;
  };
  this.setFullName = function (firstAndLast) {
    const firstAndLastArr = firstAndLast.split(" ");
    firstName = firstAndLastArr[0];
    lastName = firstAndLastArr[1];
    return;
  };
};

const bob = new Person("Bob Ross");
bob.getFullName();
