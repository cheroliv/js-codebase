/**
 * Opérateur de rest: 
 * const add = (...operandes) => a + b;
 * ou avec parametres avec valeur par défaut
 * const add = (a=0, b=0, ...operandes) => a + b;
 */

/**
 * spread opérateur: 
 * récupère l'ensemble des elements d'une collection, 
 * dans un array 
 */
const user_ages = [25, 56, 12, 58, 41, 62, 26];

const max_user_age = Math.max(...user_ages);
const min_user_age = Math.min(...user_ages);

console.assert(max_user_age == 62);
console.assert(min_user_age == 12);

console.log("---------");