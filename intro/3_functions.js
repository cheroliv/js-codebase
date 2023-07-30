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

console.log("---------");

//function style arrow
const sayHelloWorld = () => console.log("Hello world!");
sayHelloWorld();

const sayHello = (firstName, lastName) =>
    console.log(`Hello ${firstName}, ${lastName}`);
sayHello("Cher", "Oliv");

console.log("---------");

//
var writers = [
    ["Karl", "Marx", "de"],
    ["Jean-Jacques", "Rousseau", "fr"],
    ["Victor", "Hugo", "fr"],
    ["René", "Descartes", "fr"],
    ["Paul", "Verlaine", "fr"],
    ["Antonio", "Gramsci", "it"],
    ["Georg", "Lukacs", "hu"],
    ["Franz", "Kafka", "hu"],
    ["Arthur", "Rimbaud", "fr"],
    ["Gérard", "de Nerval", "fr"],
    ["Chrétien", "de Troyes", "fr"],
    ["François", "Rabelais", "fr"],
    ["Georg", "Hegel", "de"],
    ["Friedrich", "Engels", "de"],
]
const displayAuthors = (authors) => authors.forEach(author =>
    console.log(`${author[0]} ${author[1]}, (${author[2]})`)
);
displayAuthors(writers);

console.log("---------");