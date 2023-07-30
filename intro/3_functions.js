/**
 *  Les fonctions
 */

//function style legacy
function sayHelloWorldLegacy() {
    console.log("Hello world legacy!");
}
sayHelloWorldLegacy();

function sayHelloLegacy(firstName, lastName, style) {
    console.log(`Hello ${firstName}, ${lastName} (${style})`);
}
sayHelloLegacy("Cher", "Oliv", "legacy");


//function style arrow
const sayHelloWorld = () => console.log("Hello world!");
sayHelloWorld();

const sayHello = (firstName, lastName) =>
    console.log(`Hello ${firstName}, ${lastName}`);
sayHello("Cher", "Oliv");


//