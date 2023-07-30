/**
 * Les boucles
 */
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

console.log("for loop")

for (const [i, value] of authors.entries()) {
    console.log(`${value[0]}, ${value[1]} (${value[2]})`);
}

console.log("---------");

console.log("while loop")

var i = 0
while (i < authors.length) {
    console.log(`${authors[i][0]}, ${authors[i][1]} (${authors[i][2]})`);
    i++;
}
console.log(authors.length)
console.log("---------");