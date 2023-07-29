/**
 * Variables
 */
//une variable stupide
var my_variable = "dummy variable";
console.log(my_variable);
//assertion
console.assert(my_variable === "dummy variable");

var username = "cheroliv";
console.log(username);
console.assert(username === "cheroliv");

/**
 *  Opérateur arithmétique: + - * / %
 */

var x = 10;
var y = 5;
var z = 20;

console.log(x + y);
console.assert(x + y === 15);

console.log(x + y - z);
console.assert(x + y - z === -5);


console.log(x - y);
console.assert(x - y === 5);


console.log(x * y);
console.assert(x * y === 50);

console.log(x / y);
console.assert(x / y === 2);

console.log("---------");

x = 20;
y = 10;

console.log(x + y);
console.assert(x + y === 30);

console.log(x + y - z);
console.assert(x + y - z === 10);


console.log(x - y);
console.assert(x - y === 10);

console.log(x * y);
console.assert(x * y === 200);

console.log(x / z);
console.assert(x / z === 1);


console.log("---------");