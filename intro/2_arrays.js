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

//afficher les éléments sur une ligne
//version avec forEach
const displayNumbersForEach = (numberArray) => {
    var consoleOutput = "[";
    numberArray.forEach((number) => consoleOutput += `${number}, `);
    consoleOutput = consoleOutput.substring(0, consoleOutput.length - 2);
    consoleOutput += "]";
    console.log(consoleOutput);
}

//version avec map
const displayNumbers = (numberArray) => {
    var consoleOutput = "[";
    consoleOutput += numberArray.map((number) => `${number}, `);
    consoleOutput = consoleOutput.substring(0, consoleOutput.length - 2);
    consoleOutput += "]";
    console.log(consoleOutput);
}

console.log("orginal number array")
displayNumbers(numbers);
console.log("---------");


//push: ajoute à la fin
console.log("push");
numbers.push(6);
displayNumbers(numbers);
console.log("---------");

//pop: suprimme le dernier
console.log("pop");
numbers.pop();
displayNumbers(numbers);
console.log("---------");

//unshift: ajouter le parametre au debut de l'array
console.log("unshift");
numbers.unshift(0);
displayNumbers(numbers);
console.log("---------");

//shift: supprime le premier element de l'array
console.log("shift");
numbers.shift();
displayNumbers(numbers);
console.log("---------");

//slice: renvoi l'array entre les positions en argument
console.log("slice");
var sliceNumbersResult = numbers.slice(2, 4);
displayNumbers(sliceNumbersResult);
console.log("---------");

//sort asc
console.log("sort asc");
var ascSort = numbers.sort((a, b) => a - b);
displayNumbers(ascSort);
console.log("---------");

//sort desc
console.log("sort desc");
var descSort = numbers.sort((a, b) => b - a);
displayNumbers(descSort);
console.log("---------");