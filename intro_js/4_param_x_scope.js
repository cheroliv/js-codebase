//global scope: visible partout, dans et hors functions
var global;

const foo = () => {
    //local scope: visible uniquement dans la fonction foo
    var bar = "bar"
    console.log(bar)
}

foo();
console.log("---------");