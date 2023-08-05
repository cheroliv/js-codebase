/**
 * Les boucles: Itérer sur arrays et objets.
 */

console.log("for loop over array");

var numbers = [12, 10, 8, 6, 4, 2, 0];

for (number of numbers) {
    console.log(number);
}

console.log("---------");

console.log("for loop over object key");

var obj = { a: 1, b: 2, c: 3, d: 4 };

for (key in obj) {
    console.log(key);
}

console.log("---------");

console.log("for loop over object value");

for (value in obj) {
    console.log(obj[value]);
}

console.log("---------");

console.log("another for loop over authors array")

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
];

for (const [i, value] of authors.entries()) {
    console.log(`${value[0]}, ${value[1]} (${value[2]})`);
}

console.log("---------");

console.log("while loop over array")

var i = 0
while (i < authors.length) {
    console.log(`${authors[i][0]}, ${authors[i][1]} (${authors[i][2]})`);
    i++;
}

console.log("---------");