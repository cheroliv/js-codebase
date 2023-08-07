/**
 * Import et export de module
 * 
 * Dans le fichier html
 * au niveau de la balise d'import de script
 * spécifier le type module
 * 
 * 1er technique: import nommé des fonctions:
 * import { sum, minus, times, div, rem } from "./math_functions.js";
 * 
 * 2eme technique: import global des fonction avec l'asterisque(*)
 * en préfixant l'import par un nommage du fichier importé:
 * import * as math from "./math_functions.js";
 * 
 * 3eme technique: import par alias avec le mot clé "as"
 * import {
 *     sum as add,
 *     minus as substract,
 *     times as multiply,
 *     div as divide,
 *     rem as modulo
 * } from "./math_functions.js";
 */

import {
    sum,
    minus,
    times,
    div,
    rem
} from "./math_functions.js";

console.assert(sum(1, 1) === 2);
console.assert(minus(4, 2) === 2);
console.assert(times(2, 2) === 4);
console.assert(div(4, 2) === 2);
console.assert(rem(4, 2) === 0);