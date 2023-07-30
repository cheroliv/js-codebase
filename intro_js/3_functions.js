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

var authors = [
    ["Chrétien", "de Troyes", "fr"],
    ["François", "Rabelais", "fr"],
    ["René", "Descartes", "fr"],
    ["Jean-Jacques", "Rousseau", "fr"],
    ["Georg", "Hegel", "de"],
    ["Karl", "Marx", "de"],
    ["Friedrich", "Engels", "de"],
    ["Victor", "Hugo", "fr"],
    ["Paul", "Verlaine", "fr"],
    ["Antonio", "Gramsci", "it"],
    ["Georg", "Lukacs", "hu"],
    ["Franz", "Kafka", "hu"],
    ["Arthur", "Rimbaud", "fr"],
    ["Gérard", "de Nerval", "fr"],
]


const displayAuthors = (authorsArray) => authorsArray.forEach(author =>
    console.log(`${author[0]} ${author[1]}, (${author[2]})`)
);

displayAuthors(authors);

console.log("---------");

/**
 * valeur par défaut des parametres d'une fonctions 
 */
const add = (a = 0, b = 0) => a + b;
console.assert(add() === 0)
console.assert(add(1) === 1)
console.assert(add(1, 1) === 2)

console.log("---------");
/**
 * Opérateur de rest: 
 * const add = (...operandes) => a + b;
 * ou avec parametres avec valeur par défaut
 * const add = (a=0, b=0, ...operandes) => a + b;
 */

/**
 * spread opérateur: 
 * récupère l'ensemble des elements d'une collection, 
 * dans un array 
 */
const user_ages = [25, 56, 12, 58, 41, 62, 26];

const max_user_age = Math.max(...user_ages);
const min_user_age = Math.min(...user_ages);

console.assert(max_user_age == 62);
console.assert(min_user_age == 12);