// install typescript command 
// -> npm i typescript -g

var a = 10;
var b = 20;

function add(a: number, b: number): number {
    return a + b;
}

// To create the tsconfig.json file
// -> tsc --init (if this file is not created)
// -> npx tsc --init 