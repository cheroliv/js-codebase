/**
 * L'affectation par décomposition (destructuring)
 */

const user = {
    first_name: "Oliv",
    last_name: "Cher",
    nick_name: "cheroliv",
    gender: "male",
    is_adult: true
};
console.log(user);

//première façon d'initaliser des variables sans destructuration
let first_name_legacy = user.first_name;
let last_name_legacy = user.last_name;
let nick_name_legacy = user.nick_name;
let gender_legacy = user.gender;
let is_adult_legacy = user.is_adult;

console.assert("Oliv" === first_name_legacy);
console.assert("Cher" === last_name_legacy);
console.assert("cheroliv" === nick_name_legacy);
console.assert("male" === gender_legacy);
console.assert(true === is_adult_legacy);
console.log("---------");
/**
 * Initialisation par déstructuration
 */
const {
    first_name,
    last_name,
    nick_name,
    gender,
    is_adult
} = user;

console.assert(user.first_name === first_name);
console.assert(user.last_name === last_name);
console.assert(user.nick_name === nick_name);
console.assert(user.gender === gender);
console.assert(user.is_adult === is_adult);

/**
 * Intialisation par déstructuration des arrays
 */
//cible explicite
const [a1, a2] = [15, 25, 17, 81, 51, 46];
console.assert(a1 === 15);
console.assert(a2 === 25);

//cible avec position par rapport aux index par virgules
//je veux b3 à 46
const [b1, b2, , , , b3] = [15, 25, 17, 81, 51, 46];
console.assert(b1 === 15);
console.assert(b2 === 25);
console.assert(b3 === 46);

//déstructuration avec operateur de rest
// je contruit un autre avec avec les elements 
// à partir du premier élèment non destructuré
const [c1, c2, ...sub_arr] = [15, 25, 17, 81, 51, 46];
console.assert(b1 === 15);
console.assert(b2 === 25);
console.assert(sub_arr.length === 4);
console.assert(sub_arr[0] === 17);
console.assert(sub_arr[1] === 81);
console.assert(sub_arr[2] === 51);
console.assert(sub_arr[3] === 46);


// Une boucle pour comparer le resultat attendu
for (const [i, value] of[15, 25, 17, 81, 51, 46].entries()) {
    //on reconstruit le tableau à chaque iteration
    console.assert([c1, c2].concat(sub_arr)[i] === value);
}