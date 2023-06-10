import User, { printName as printUserName, printAge } from '/user.js';

const user = new User('Bob', 24);
console.log(user);

printUserName(user);
printAge(user);
