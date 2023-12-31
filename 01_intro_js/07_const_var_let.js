/**
 * const X var X let
 */
//var x du if n'est pas confiné au scope du if
const varTest = () => {
    var x = 1;
    console.log(x);
    console.assert(x === 1);
    if (true) {
        var x = 2;
        console.log(x);
        console.assert(x === 2);
    }
    console.log(x);
    console.assert(x !== 1);
    console.assert(x === 2);
}
varTest();

console.log("---------");

//var x est global à tous les fichier js 
//chargés dans la page html
//var x issue du fichier 1_start.js
//ligne 46
console.log(x);
console.assert(x === 20);

console.log("---------");

//premier let x est confiné au scope de la fonction
//le let x du if est confiné au scope du if
const letTest = () => {
    let x = 1;
    console.log(x);
    console.assert(x === 1);
    if (true) {
        let x = 2;
        console.log(x);
        console.assert(x === 2);
    }
    console.log(x);
    console.assert(x === 1);
    console.assert(x !== 2);
}
letTest();

console.log("---------");

/**
 * const: déclare un emplacement mémoire non réattribuable
 * c'est modifiable pour un array,
 * mais non réinitialisable;
 * ex:
 * const arr = [25, 27, 29]
 * arr = [5, 7] //impossible
 * arr[0]=20 // possible
 * ex:
 * const n = 1;
 * n = 3; //impossible
 */
const arr = [25, 27, 29]
console.table(arr);
arr[0] = 20 // possible
console.table(arr);

arr.pop()
console.table(arr);
console.log("---------");