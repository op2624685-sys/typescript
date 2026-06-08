// Here we have 
// Any, Unknown, Void, Never, Null, Undefined

// Any is a type that can hold any value if we don't diffine the type by default it will set to any. which accept any value. It is a very loose type. It is not recommended to use any type. make sure that we specify the type.
let a;  // any type

// Unknown is a type that can hold any value. It is a loose type. It is not recommended to use unknown type. make sure that we specify the type. But here is the catch is that we can't access the properties of unknown type.
let user: unknown; // unknown type
user = "hello";
user = 1;
user = true;
// user.name; // error
// user.toUpperCase(); // error
// so we can't access the properties of unknown type. so we specify the type of unknown type.
if ( typeof user === "string" ) { // check the type of user
    user.toUpperCase(); // now we can access the properties of that type in unknown.
}

// Void is a type that not return any value. so if we write any function of method that doesn't return any value then we use void type.

function print(a:string, b:string):void{
    console.log(a + b);
}

// Never is a type that never return any value. It is a strict type. It will use to throw an error or never return any value.
function error(message:string):never{
    throw new Error(message);
}

// Null is a type that can hold null value. this will be used to represent the intentional absence of any object value.
// this will also accept the null value.
let address :string | null;
address = "India";
address = null;


// Undefined is a type that can hold undefined value. this will be used to represent the intentional absence of any object value.
// this will also accept the undefined value.
let address2 :string | undefined;
address2 = "India";
address2 = undefined;