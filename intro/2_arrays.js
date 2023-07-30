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

// accé aux elements du tableau
console.log(writers[0]);
console.log(`${writers[0][0]}, ${writers[0][1]} (${writers[0][2]})`);
console.assert("Karl, Marx (de)" === `${writers[0][0]}, ${writers[0][1]} (${writers[0][2]})`);