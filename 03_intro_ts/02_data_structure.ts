/***
 * Structure de données:
 * Avec le type any on peut changer 
 * le type de la variable à tout instruction
 * Lorsque l'on fixe le type 
 * alors il n'est plus possible de le changer
 * lors d'une assignation
 */
// Arrays
let buddies: any[] = [
    "cheroliv",
    "imrandeh",
    "issoudeh",
    "soumi92"
]

let writers: (String | String | String | Number)[][] = [
    ["Chrétien", "de Troyes", "fr", 12],
    ["François", "Rabelais", "fr", 16],
    ["René", "Descartes", "fr", 17],
    ["Jean-Jacques", "Rousseau", "fr", 18],
    ["Georg", "Hegel", "de", 19],
    ["Karl", "Marx", "de", 19],
    ["Friedrich", "Engels", "de", 19],
    ["Victor", "Hugo", "fr", 19],
    ["Paul", "Verlaine", "fr", 19],
    ["Arthur", "Rimbaud", "fr", 19],
    ["Gérard", "de Nerval", "fr", 19],
    ["Georg", "Lukacs", "hu", 20],
    ["Franz", "Kafka", "hu", 20],
    ["Antonio", "Gramsci", "it", 20],
];

console.table(buddies);
console.table(writers);


// Objects
let author: {
    first_name: String,
    last_name: String,
    lang: String,
    century: Number
} = {
    first_name: "Antonio",
    last_name: "Gramsci",
    lang: "it",
    century: 20,
}

console.table(author);