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
//var x est global a tous les fichier js 
//chargés dans la page html
console.log(x);
console.assert(x === 20);
console.log("---------");