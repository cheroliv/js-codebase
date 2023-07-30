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