/**
 * Les objects
 */
var authorsArray = [
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

var victorHugoAuthor = {
    firstName: authorsArray[7][0],
    lastName: authorsArray[7][1],
    country: authorsArray[7][2],
};

var book = {
    author: victorHugoAuthor,
    title: "Les misérables"
};
console.log(victorHugoAuthor);
console.log(book);

//accéder à un membre de l'objet par point
console.log(victorHugoAuthor.country);

//accéder à un membre de l'objet par crochet
console.log(book["title"]);

console.log(book.author.lastName);

console.log(book["author"]["firstName"]);

//ajouter une clé a un objet
victorHugoAuthor.gender = "non binary";
console.assert(victorHugoAuthor.gender === "non binary");


//mettre à jour une clé
victorHugoAuthor.gender = "male";
console.assert(victorHugoAuthor.gender !== "non binary");
console.assert(victorHugoAuthor["gender"] === "male");

//supprimer une clé
delete victorHugoAuthor.gender;


//verfier que l'objet ne contient pas la clé gender
console.assert(!Object.keys(victorHugoAuthor).includes("gender"));


console.log("---------");