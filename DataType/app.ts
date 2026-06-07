// Difference between primitive and non-primitive(reference) data types

// Primitive data types are immutable hoti hain or isko copy kiya ja sakte hain ex: number, string, boolean & null etc
let x = 10;
let y = x;
x = 20;
console.log(x);
console.log(y);

// Reference data types are mutable hoti hai or isko copy nhi kiya ja sakte hain bali isko copy krne pe iska reference memory address bheja jata hain jisse agar isko change krne pe original value pe change ho jata hain ex: object, array & map & set

let arr1 = [1, 2, 3, 4, 5];
let arr2 = arr1;
arr2.push(6);
console.log(arr1);
console.log(arr2);

// It possible to create a copy of an array using the spread operator
let arr3 = [...arr1];
arr3.push(7);
console.log(arr1);
console.log(arr3);