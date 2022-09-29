// CommonJS, every file is module (by default)
// Modules - Encapsulated code (only sharing minimum)

const { john, peter, objTest } = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");
require("./7-mind-grenade");

console.log(data);

// sayHi("Susan");
// sayHi(objTest.animal);
// sayHi(john);
// sayHi(peter);
