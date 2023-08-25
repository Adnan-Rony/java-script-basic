

//primitive types

var undefinedVar = undefined;
var nullValue = null;
var booleanValue = true;
var numberValue = 42;
var stringValue = "Hello, world!";


console.log(typeof undefinedVar); // Output: "undefined"
console.log(typeof nullValue);     // Output: "object" (Note: This is a known quirk in JavaScript)
console.log(typeof booleanValue);  // Output: "boolean"
console.log(typeof numberValue);   // Output: "number"
console.log(typeof stringValue);   // Output: "string"




//non-primitive types

// Object
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
  };
  
  // Array
  var numbers = [1, 2, 3, 4, 5];
  
  // Function
  function greet(name) {
    console.log("Hello, " + name + "!");
  }
  
  console.log(typeof person);  // Output: "object"
  console.log(typeof numbers); // Output: "object"
  console.log(typeof greet);   // Output: "function"
  