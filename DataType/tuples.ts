// we create tuples because we need to store values of different data types in a single variable
let tuple: [number, string, boolean] = [1, "hello", true],
    tuple2: [number, string, boolean] = [2, "world", false],
    tuple3: [number, string, boolean] = [3, "world", true];
// we don't write like this 
// -> let tuple: [number, string, boolean] = ["hello", true, 1];

console.log(tuple);
console.log(tuple2);
console.log(tuple3);