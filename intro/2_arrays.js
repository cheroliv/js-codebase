/**
 * Les arrays
 */
// auteurs [["nom ", "prénom", "pays"]]
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

console.log(writers);

// accés aux elements du tableau
console.log(writers[0]);
console.log(`${writers[0][0]}, ${writers[0][1]} (${writers[0][2]})`);
console.assert("Karl, Marx (de)" === `${writers[0][0]}, ${writers[0][1]} (${writers[0][2]})`);

//sauvegarder la valeur du prénom de Marx
var karl = writers[0][0]

//éditer un élement du tableau, le prénom de Marx
writers[0][0] = "Karlito"

console.log(`${writers[0][0]}, ${writers[0][1]} (${writers[0][2]})`);
console.assert("Karlito, Marx (de)" === `${writers[0][0]}, ${writers[0][1]} (${writers[0][2]})`);

console.assert("Karl" === karl);

//remettre la valeur initale du prénom de Marx
writers[0][0] = karl;

console.assert(`${karl}, Marx (de)` === `${writers[0][0]}, ${writers[0][1]} (${writers[0][2]})`);

console.log("---------");

/**
 *  Arrays: map/forEach/pop/push/slice/sort/shift/unshift
 */

var numbers = [1, 5, 4, 3, 2];

console.log("Iterate with forEach");
// parcourir avec array.forEach
numbers.forEach((it) => console.log(it));
console.log("---------");

console.log("Iterate with map");
// parcourir avec array.map
numbers.map((it) => console.log(it));
console.log("---------");

//afficher les elements sur une ligne
console.log("orginal number array")
const displayNumbers = (numberArray) => {}
displayNumbers(numbers);
console.log("---------");


//push
console.log("push");

console.log("---------");
//pop
console.log("pop");
console.log("---------");
//slice
console.log("slice");
console.log("---------");
//sort
console.log("sort");
console.log("---------");
//shift
console.log("shift");
console.log("---------");
//unshift
console.log("unshift");
console.log("---------");