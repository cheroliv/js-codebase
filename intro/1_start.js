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

//concaténation de string
console.assert(username === "cher" + "oliv");

/**
 *  Opérateur arithmétique: + - * / %
 */
//integer
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


//Littéraux de gabarits pour string avec backstick `
//Template literals (Template strings)
console.assert(`typeof z: ${typeof z}` === "typeof z: number");

console.log(`x is type of : ${typeof x}`);
console.log(`y is type of : ${typeof y}`);
console.log(`z is type of : ${typeof z}`);

//typeof: donne le type de la variable
console.assert(typeof x === "number");
console.assert(typeof y === "number");
console.assert(typeof z === "number");


console.log("---------");
/**
 * Incrémenation/décrémentation
 */
//incrémantation/décrémentation préfixe
console.log(++x) //incrémenté puis affiché: 21
console.log(x) //la valeur incrémenté: 21

//incrémantation/décrémentation suffixe
console.log(y++) //affiche la valeur sans incrémenation puis incrémente: 10
console.log(y) //la valeur incrémenté: 11

//décrémentation
x--;
y--;
console.assert(x === 20);
console.assert(y === 10);


/**
 * String: chaine de caractères
 */
console.log(`username: ${username}`);

//taille de la string
console.log(`username.length: ${username.length}`);
console.assert(username.length === 8);
console.assert(username.length === "cheroliv".length);
console.log("---------");