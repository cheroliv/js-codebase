/**
 * Enums et Tuples
 * 
 * Enum: il existe les enums numérique 
 * et les enums chaine de caracteres.
 * 
 * Tuple: similaire aux arrays mais ne peut
 * contenir qu'une valeur de type spécifié.
 * 
 */

//Enum numérique
enum Week {
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
    Sunday = 7,
};

type Meaning_of_the_day = {
    lang: String,
    meaning: (Week | String)[][],
};

const display_meaning_of_the_day = (motd: Meaning_of_the_day) => {
    console.log(motd.lang)
    motd.meaning.forEach(day => console.table(`${Week[day[0] as Week]}: ${day[1]}`))
};

let meaning_of_the_day_fr: Meaning_of_the_day = {
    lang: "fr",
    meaning: [
        [Week.Monday, "Associé à la Lune"],
        [Week.Tuesday,"Du dieu Tiw, associé à Mars"],
        [Week.Wednesday,"Du dieu germanique Odin"],
        [Week.Thursday,"Du dieu germanique du tonnerre Thor"],
        [Week.Friday,"De la déesse germanique Frigga associée à Vénus"],
        [Week.Saturday,"Associé à Saturne"],
        [Week.Sunday,"Associé au Soleil"],
    ],
}

console.log("Enums et Tuples");
console.log("---------");

console.log("Enums:");
display_meaning_of_the_day(meaning_of_the_day_fr);

console.log("---------");

let meaning_of_the_day_en: Meaning_of_the_day = {
    lang: "en",
    meaning: [
        [Week.Monday, "associated with the Moon"],
        [Week.Tuesday,"from the god Tiw, associated with Mars"],
        [Week.Wednesday,"from Germanic god Odin"],
        [Week.Thursday,"from Germanic god of thunder Thor"],
        [Week.Friday,"from Germanic goddess Frigga associated with Venus"],
        [Week.Saturday,"associated with Saturn"],
        [Week.Sunday,"associated with the Sun"],
    ],
}

display_meaning_of_the_day(meaning_of_the_day_en);

console.log("---------");

console.log("Tuples:");



console.log("---------");